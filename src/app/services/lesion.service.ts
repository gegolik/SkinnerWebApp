import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LesionService {

  constructor(private http: HttpClient) {

  }

  public getLesiones() {
    return this.http.get("http://localhost:8080/lesiones/paciente");
  }
  
  public getLesionesPorUsuario(usuarioid:number) {
    return this.http.get("http://localhost:8080/lesiones/paciente/"+usuarioid);
  }

  public getTipoLesiones() {
    return this.http.get("http://localhost:8080/tipo_lesiones");
  }
}
