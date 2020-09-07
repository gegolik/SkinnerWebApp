import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaLesionesService {


  constructor(private http: HttpClient) { }

  public borrarAsignacionTratamiento(id: any) {
    return this.http.delete('http://localhost:8080/lesion_tratamientos/'+id);
  }
  public getHistorialLesionesPorId(lesionid:number) {
    return this.http.get("http://localhost:8080/historial/lesion/"+lesionid);
  }

  public getTratamientosLesiones(lesionid:number) {
    return this.http.get("http://localhost:8080/lesion_tratamientos/"+lesionid);
  }

  public modificarLesiones(lesionid:number,comment){
    let data = {
      comentario: comment
    };
    return this.http.put('http://localhost:8080/historial/comentario/'+lesionid, data);

  }

  public asignarTratamientos(tratamientoNuevoid:number,lesion:any){

      let data = {
        id_lesion: parseInt(lesion),
        id_tratamiento: tratamientoNuevoid
      };
      return this.http.post('http://localhost:8080/lesion_tratamientos', data);
    
  }
}
