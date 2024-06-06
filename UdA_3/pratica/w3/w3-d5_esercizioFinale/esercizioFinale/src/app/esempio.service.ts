import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsempioService {

apiURL:string = "http://localhost:3000"

  constructor(
private http:HttpClient

  ) { }

  getAll(){
  //  return this.http.get<iEsempio[]>(this.apiURL)
  }
  getByID(id:number){
//    return this.http.get<iesempio[]>(this.apiurl)
  }
  create(){
    //return this.http.put<iesempio[]>(this.apiurl)

  }
  update(){
    //return this.http.get<iesempio[]>(this.apiurl)
  }
  delete(){
  //  return this.http.get<iesempio[]>(this.apiurl)
  }
}

