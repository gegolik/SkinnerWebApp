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
  public getLesionPorId(idLesion) {
    return this.http.get("http://localhost:8080/lesiones/"+idLesion);
  }
  public getUsuariosPorLesionId(idLesion:any) {
    return this.http.get("http://localhost:8080/lesiones/usuarios/"+idLesion);
  }
  public getLesionesPorUsuario(usuarioid:number) {
    return this.http.get("http://localhost:8080/lesiones/paciente/"+usuarioid);
  }
  public modificarLesiones(idTipoLesion:number,listaLesiones:any,id:number){

      let data = {
        "id_paciente": listaLesiones[0].id_paciente,
        "id_doctor": listaLesiones[0].id_doctor,
        "descripcion": listaLesiones[0].descripcion,
        "id_tipo": idTipoLesion,
        "ubicacion": listaLesiones[0].ubicacion,
        "fecha_creacion": new Date().toDateString()
      };
      return this.http.put('http://localhost:8080/lesiones/'+id, data);
  
    
  }


  public getTipoLesiones() {
    return this.http.get("http://localhost:8080/tipo_lesiones");
  }
}
