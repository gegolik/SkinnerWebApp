import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { }
  public getMensajes(id:any) {
    return this.http.get("http://localhost:8080/mensajes/"+id);
  }
  
  public createMensaje(mensaje:string,origen:number,destino:number,lesion:number) {
    let data = {
      id_origen_usuario: origen,
      id_destino_usuario: destino,
      mensaje:mensaje,
      id_lesion: lesion
    };
    return this.http.post("http://localhost:8080/mensajes/",data);
  }
}
