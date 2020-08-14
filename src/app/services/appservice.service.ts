import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

  public getNotificaciones(dummyid:number) {
    return this.http.get("http://localhost:8080//usuarios/notificaciones/"+dummyid);
  }
}
