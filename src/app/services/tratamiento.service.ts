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
    return this.http.get('http://localhost:8080/tratamientos');
  }

  addTratamiento(trat: tratamientoObject) {
    let data = {
      tipoLesion: trat.tipoLesion,
      titulo: trat.titulo,
      descripcion: trat.descripcion,
    };
    return this.http.post('http://localhost:8080/tratamientos', data);
  }

  deleteTratamiento(id: number) {
    return this.http.delete('http://localhost:8080/tratamientos/' + id);
  }

  nuevoTratamiento(): tratamientoObject {
    return {
      codigo: this.tratamientos.length,
      tipoLesion: 1,
      titulo: '',
      descripcion: '',
    };
  }
}
