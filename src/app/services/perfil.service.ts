import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  public getUser(id) {

    return this.http.get("http://localhost:8080/usuarios/"+id);
  }

  public cambiarUsuario(id,user){
    let data = {
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      telefono: user.telefono,
      direccion: user.direccion,
      id_rol:1,
      activo:true
    };
    return this.http.put('http://localhost:8080/usuarios/'+id, data);
  }
  public cambiarPassword (id,conjuntoContrasenia) {
    let data = {
      password: conjuntoContrasenia.passwordVieja,
      new_password: conjuntoContrasenia.passwordNueva
    };
    return this.http.put("http://localhost:8080/cambiar_password/"+id,data);
  }
}
