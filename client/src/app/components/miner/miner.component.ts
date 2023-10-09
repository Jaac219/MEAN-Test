import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { enviroment } from 'src/app/environments/environment';
import { Miner } from 'src/app/models/miner.model';

@Component({
  selector: 'app-miner',
  templateUrl: './miner.component.html',
  styleUrls: ['./miner.component.css']
})

export class MinerComponent {
  http = inject(HttpClient);
  miners: Miner[] = [];

  ngOnInit() {
    this.http.get<Miner[]>(enviroment.API_URL)
      .subscribe((data)=>{
        this.miners = data
      }) 
  }
  // @Input() miner!: Miner;
}
