import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Miner } from 'src/app/models/miner.model';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-miner',
  templateUrl: './create-miner.component.html',
  styleUrls: ['./create-miner.component.css']
})
export class CreateMinerComponent {
  typesId: string[] = [];
  municipalities: string[] = [];

  createForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    typeId: new FormControl(''),
    identification: new FormControl(0),
    municipality: new FormControl(''),
    img: new FormControl('')
  })

  constructor(private activeRouter:ActivatedRoute, private router:Router, private apiService:ApiService){}

  ngOnInit(){
    this.apiService.getMunicipalities().subscribe((data) => {
      this.municipalities = data;
    });

    this.apiService.getTypesId().subscribe((data) => {
      this.typesId = data;
    });
  }

  createMiner(form: Miner | any){
    this.apiService.createMiner(form)
     .subscribe((data)=>{
        if(data) this.router.navigate(['miners'])
     })
  }

  onFileChange(event: any) {
    this.createForm.patchValue({
      img: event.target.files[0]
    })
  }
}
