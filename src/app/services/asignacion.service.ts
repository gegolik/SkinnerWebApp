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

  public getNotificacionesPorUsuario(usuarioid:number){
    return this.http.get("http://localhost:8080/asignaciones/"+usuarioid+"/notificaciones");
  }
  public borrarNotificacionPorId(asignacionId:number) {
    return this.http.delete("http://localhost:8080/asignaciones/"+asignacionId);
  }
  public updateAsignacionPorId(value:boolean,asignacionId:number) {
    let data = {
      aprobado: value
    };
    return this.http.put("http://localhost:8080/asignaciones/"+asignacionId,data);
  }
  
}
