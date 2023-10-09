import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Miner } from 'src/app/models/miner.model';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-miner',
  templateUrl: './edit-miner.component.html',
  styleUrls: ['./edit-miner.component.css']
})
export class EditMinerComponent {
  minerId: string = '';
  miner!: Miner;
  typesId: string[] = [];
  municipalities: string[] = [];

  editForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    typeId: new FormControl(''),
    identification: new FormControl(0),
    municipality: new FormControl(''),
    imgUrl: new FormControl(''),
    img: new FormControl()
  })

  constructor(private activeRouter:ActivatedRoute, private router:Router, private apiService:ApiService){}

  ngOnInit(){
    this.minerId = this.activeRouter.snapshot.paramMap.get('id') || ''
    this.apiService.getOneMiner(this.minerId)
      .subscribe((data)=>{
        this.miner = data
        this.editForm.setValue({
          'firstName': this.miner.firstName,
          'lastName':this.miner.lastName,
          'typeId':this.miner.typeId,
          'identification':this.miner.identification,
          'municipality':this.miner.municipality,
          'imgUrl':this.miner.municipality,
          'img':null,
        });
      })

    this.apiService.getMunicipalities()
      .subscribe((data)=>{
        this.municipalities = data
      })

    this.apiService.getTypesId()
      .subscribe((data)=>{
        this.typesId = data
      })
  }

  updateMiner(form: Miner | any){
    this.apiService.putOneMiner(form, this.minerId)
     .subscribe((data)=>{
      this.router.navigate(['miners'])
     })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];

    // Leer el archivo como URL
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.miner.imgUrl = e.target.result;
    };
    reader.readAsDataURL(file);

    this.editForm.patchValue({ img: file });
  }
}
