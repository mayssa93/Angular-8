import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../model/article.model";
import {Achat} from "../model/achat.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string ="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }
  public getArticles(page:number, size:number){
    return this.httpClient.get(this.host+"/articles?page="+page+"&size="+size);
  }
  public getArticlesByKeyword(rf:string ,page:number, size:number){
    return this.httpClient.get(this.host+"/articles/search/byReferencePage?rf="+rf+"&page="+page+"&size"+size);
  }
  public deleteRessource(url){
    return this.httpClient.delete(url);
  }
  public saveRessource(url,data):Observable<Article>{
    return this.httpClient.post<Article>(url,data);
  }
  public getRessource(url):Observable<Article>{
    return this.httpClient.get<Article>(url);
  }
  public updateRessource(url,data){
    return this.httpClient.put(url,data);
  }
}
