import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Achat} from "../model/achat.model";

@Injectable({
  providedIn: 'root'
})
export class Catalogue1Service {
  public host:string ="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
  public getAchats(page:number, size:number){
    return this.httpClient.get(this.host+"/achats?page="+page+"&size="+size);
  }
  public getAchatsByKeyword(rs:string ,page:number, size:number){
    return this.httpClient.get(this.host+"/achats/search/byRemisePage?rs="+rs+"&page="+page+"&size"+size);
  }
  public deleteRessource(url){
    return this.httpClient.delete(url);
  }
  public saveRessource(url,data):Observable<Achat>{
    return this.httpClient.post<Achat>(url,data);
  }
  public getRessource(url):Observable<Achat>{
    return this.httpClient.get<Achat>(url);
  }
  public updateRessource(url,data){
    return this.httpClient.put(url,data);
  }
}
