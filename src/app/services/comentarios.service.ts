import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }
  
  public getComentarios(idLesion:number,tipo:number) {
    return this.http.get('http://localhost:8080/comentarios/' + idLesion+"/"+tipo);
  }

  public postComentarios(
    tipo_comentario: number,
    lesion: number,
    comentario: string
  ) {
    let data = {
      tipo_comentario: tipo_comentario,
      lesion: lesion,
      comentario: comentario
    };

    return this.http.post('http://localhost:8080/comentarios',data);
  }
}
