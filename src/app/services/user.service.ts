import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  constructor(private http: HttpClient) {

  }

  public getData() {

    return this.http.get("http://localhost:8080/usuarios/rol/2");
  }

  public getDataPacientes(id:number) {

    return this.http.get("http://localhost:8080/pacientes/"+id);
  }

  public getRecibeNotificaciones(id:number) {

    return this.http.get("http://localhost:8080/notificacion_habilitada/"+id);
  }


}
