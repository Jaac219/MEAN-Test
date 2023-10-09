import { Injectable } from '@angular/core';
import { ResponseI } from 'src/app/models/response.model';
import { FilterMiner, Miner } from 'src/app/models/miner.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { enviroment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url:string = enviroment.API_URL
  constructor(private http:HttpClient) { }

  getAllMiners(filters: FilterMiner | null):Observable<Miner[]>{
    const params = { typeId: '', municipality: ''};

    if (filters && filters.typeId) params['typeId'] = filters.typeId;
    if (filters && filters.municipality)  params['municipality'] = filters.municipality;

    const endPoint = `${this.url}/miner`
    return this.http.get<Miner[]>(endPoint, { params });
  }

  getOneMiner(id: string):Observable<Miner>{
    const endPoint = `${this.url}/miner/${id}`
    return this.http.get<Miner>(endPoint)
  }

  putOneMiner(form: Miner | any, id: string):Observable<any>{
    const formData = new FormData();

    Object.keys(form).forEach(key => {
      formData.append(key, form[key]);
    })

    const endPoint = `${this.url}/miner/${id}`
    return this.http.patch(endPoint, formData, { responseType: 'text' })
  }

  getMunicipalities():Observable<string[]>{
    const endPoint = `${this.url}/location/municipality`
    return this.http.get<string[]>(endPoint)
  }

  getTypesId():Observable<string[]>{
    const endPoint = `${this.url}/miner/typesId`
    return this.http.get<string[]>(endPoint)
  }

  deleteMiner(id: string):Observable<any>{
    const endPoint = `${this.url}/miner/${id}`
    return this.http.delete(endPoint)
  }

  createMiner(form: Miner | any):Observable<any>{
    const formData = new FormData();

    Object.keys(form).forEach(key => {
      formData.append(key, form[key]);
    })

    const endPoint = `${this.url}/miner`
    return this.http.post(endPoint, formData, { responseType: 'text' });
  }
}
