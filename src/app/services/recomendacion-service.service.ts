import { Injectable } from '@angular/core';
import { recomendacionObject } from '../Models/recomendacion_model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionServiceService {
  private recomendaciones: recomendacionObject[] = [
  ];
  constructor(private http: HttpClient) { }
  getRecomendaciones() {
    return this.http.get('http://localhost:8080/recomendaciones');
  }

  addRecomendacion(trat: recomendacionObject) {
    let data = {
      tipoLesion: trat.tipoLesion,
      titulo: trat.titulo,
      descripcion: trat.descripcion,
    };
    return this.http.post('http://localhost:8080/recomendaciones', data);
  }

  deleteRecomendacion(id: number) {
    return this.http.delete('http://localhost:8080/recomendaciones/' + id);
  }

  nuevaRecomendacion(): recomendacionObject {
    return {
      codigo: this.recomendaciones.length,
      tipoLesion: 1,
      titulo: '',
      descripcion: '',
    };
  }
}

