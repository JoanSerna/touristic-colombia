import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { TouristSite } from "../models/tourist-site";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TouristSiteService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getTouristSites(): Observable<TouristSite[]> {
    const url = `${environment.apiUrl}/TouristicAttraction`
    return this.httpClient.get<TouristSite[]>(url);
  }
}
