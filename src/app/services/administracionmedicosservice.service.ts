import { Injectable } from '@angular/core';
import { medicoObject } from '../Models/medico_model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministracionmedicosserviceService {


  constructor(private http: HttpClient) { }

  modificarMedico(nuevoMedico: medicoObject) {
    let data = {
      nombre: nuevoMedico.nombre,
      apellido: nuevoMedico.apellido,
      email: nuevoMedico.email,
      telefono: nuevoMedico.telefono,
      direccion: nuevoMedico.direccion,
      id_rol:1,
      activo:nuevoMedico.activo
    };
    return this.http.put('http://localhost:8080/usuarios/'+nuevoMedico.id, data);
  }

  addMedico(nuevoMedico: medicoObject) {
    let data = {
      nombre: nuevoMedico.nombre,
      apellido: nuevoMedico.apellido,
      email: nuevoMedico.email,
      telefono: nuevoMedico.telefono,
      direccion: nuevoMedico.direccion,
      password: "pass",
      id_rol: 1,
      activo:true
    };
    return this.http.post('http://localhost:8080/usuarios', data);
  }
  deleteMedico(id: number) {
    return this.http.delete('http://localhost:8080/usuarios/' + id);
  }
  getMedicos() {
    return this.http.get('http://localhost:8080/usuarios/rol/1');
  }
}
