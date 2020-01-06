import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ligneAchat} from "../model/ligneAchat";
import {CatalogueService} from "../services/catalogue.service";
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Catalogue2Service {
  public host: string = "http://localhost:8080";
  public
  constructor(private httpClient: HttpClient) {
  }

  public getligneAchats():Observable<ligneAchat[]> {
    return this.httpClient.get<ligneAchat[]>(this.host+"/cool-ligneachats")
      .pipe(retry(1),
        catchError(this.handleError)
        );
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
  public deleteRessource(url) {
    return this.httpClient.delete(url);
  }

  public saveRessource(url, data): Observable<ligneAchat> {
    return this.httpClient.post<ligneAchat>(url, data);
  }

  public getRessource(url): Observable<ligneAchat> {
    return this.httpClient.get<ligneAchat>(url);
  }

  public updateRessource(url, data) {
    return this.httpClient.put(url, data);
  }
}
