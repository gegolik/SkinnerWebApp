import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  addEvento(idPaciente: number, idDoctor: number, title: string, startStr: string, endStr: string) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post("http://localhost:8080/agenda",JSON.stringify("{\"id_paciente\":"+idPaciente +",\"id_doctor\":"+ idDoctor+",\"titulo\":"+title+",\"fecha_inicio\":"+startStr+",\"fecha_fin\":"+ endStr+"}"),httpOptions);
  }
  deleteEvento(id: number) {
    
    return this.http.delete("http://localhost:8080/agenda/"+id);
  }

  constructor(private http: HttpClient) { }

  public getCalendario() {
    return this.http.get("http://localhost:8080/agenda/"+2);
  }
}
