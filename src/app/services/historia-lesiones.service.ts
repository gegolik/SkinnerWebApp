import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaLesionesService {

  constructor(private http: HttpClient) { }

  public getHistorialLesionesPorId(lesionid:number) {
    return this.http.get("http://localhost:8080/historial/lesion/"+lesionid);
  }
}
