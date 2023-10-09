import { Injectable } from '@angular/core';
import { ResponseI } from 'src/app/models/response.model';
import { Miner } from 'src/app/models/miner.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { enviroment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url:string = enviroment.API_URL
  constructor(private http:HttpClient) { }

  getAllMiners():Observable<Miner[]>{
    const endPoint = this.url + '/miner'
    return this.http.get<Miner[]>(endPoint)
  }
}
