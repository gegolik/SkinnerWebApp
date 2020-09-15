import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  constructor(private http: HttpClient) { }

  public getAsignacionesPorUsuario(usuarioid:number) {
    return this.http.get("http://localhost:8080/asignaciones/"+usuarioid);
  }
  public updateAsignacionPorId(value:boolean,asignacionId:number) {
    let data = {
      aprobado: value
    };
    return this.http.put("http://localhost:8080/asignaciones/"+asignacionId,data);
  }

  
}
