
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ligneAchat} from "../model/ligneAchat";
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Catalogue2Service {
  public host: string = "http://localhost:8080/ligneAchatt";
  constructor(private httpClient: HttpClient) {
  }
  getLigneachatsList(): Observable<any> {
    return this.httpClient.get<any>(this.host);
  }
  public getligneAchats():Observable<ligneAchat> {
    return this.httpClient.get<ligneAchat>(this.host)
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }
  getAchats(id: number): Observable<any> {
    return this.httpClient.get(`${this.host}/${id}`);
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  deleteRessource(id: number): Observable<any> {
    return this.httpClient.delete(`${this.host}/${id}`, { responseType: 'text' });
  }
  public saveRessource(url, data): Observable<ligneAchat> {
    return this.httpClient.post<ligneAchat>(url, data);
  }
  createEmployee(currentligneAchat: Object): Observable<Object> {
    return this.httpClient.post(`${this.host}`, currentligneAchat);
  }
  public updateRessource(id:number, value:any):Observable<Object> {
    return this.httpClient.put(`${this.host}/${id}`, value);
  }

}
