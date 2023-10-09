import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FilterMiner, Miner } from 'src/app/models/miner.model';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.css'],
})
export class MinerComponent {
  miners: Miner[] = [];
  typesId: string[] = [];
  municipalities: string[] = [];

  filterForm = new FormGroup({
    municipality: new FormControl(''),
    typeId: new FormControl(''),
  })

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getAllMiners(null).subscribe((data) => {
      this.miners = data;
    });
    this.api.getMunicipalities().subscribe((data) => {
      this.municipalities = data;
    });

    this.api.getTypesId().subscribe((data) => {
      this.typesId = data;
    });
  }

  createMiner() {
    this.router.navigate(['create-miner']);
  }

  editMiner(id: string) {
    this.router.navigate(['edit-miner', id]);
  }

  deleteMiner(id: string) {
    this.api.deleteMiner(id).subscribe((data) => {
      if(data) this.miners = this.miners.filter(miner => miner._id !== id);
    });
  }

  getMinersWithFilter(form: FilterMiner) {
    this.api.getAllMiners(form).subscribe((data) => {
      this.miners = data;
    });
  }
  // @Input() miner!: Miner;
}
