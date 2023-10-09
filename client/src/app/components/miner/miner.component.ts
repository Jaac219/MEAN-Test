import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Miner } from 'src/app/models/miner.model';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.css'],
})
export class MinerComponent {
  constructor(private api: ApiService, private router: Router) {}
  miners: Miner[] = [];

  ngOnInit() {
    this.api.getAllMiners().subscribe((data) => {
      this.miners = data;
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
  // @Input() miner!: Miner;
}
