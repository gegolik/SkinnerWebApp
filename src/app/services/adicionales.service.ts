import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdicionalesService {

  constructor(private http: HttpClient) { }

  getAdicionales(id:number) {
    return this.http.get('http://localhost:8080/adicionales/'+id);
  }

  deleteAdicionales(id: number) {
    return this.http.delete('http://localhost:8080/adicionales/' + id);
  }
}
