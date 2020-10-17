import { Injectable } from '@angular/core';
import { tratamientoObject } from '../Models/tratamiento_model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
  private tratamientos: tratamientoObject[] = [

  ];

  constructor(private http: HttpClient) {}

  getTratamientos() {
    return this.http.get('http://localhost:8080/tratamientos/');
  }
  
  getTratamientosById(id:number) {
    return this.http.get('http://localhost:8080/tratamientos/'+id);
  }
  addTratamiento(trat: tratamientoObject) {
    let data = {
      tipoLesion: trat.id_tipo,
      titulo: trat.titulo,
      descripcion: trat.descripcion,
    };
    return this.http.post('http://localhost:8080/tratamientos', data);
  }

  modificarTratamiento(trat) {
    console.log(trat)
    let data = {
      tipoLesion: trat.id_tipo,
      titulo: trat.titulo,
      descripcion: trat.descripcion,
    };
    return this.http.put('http://localhost:8080/tratamientos/'+trat.id, data);
  }

  deleteTratamiento(id: number) {
    return this.http.delete('http://localhost:8080/tratamientos/' + id);
  }

  nuevoTratamiento(): tratamientoObject {
    return {
      id_tipo: 1,
      codigo: this.tratamientos.length,
      tipoLesion: 1,
      titulo: '',
      descripcion: '',
    };
  }
}
