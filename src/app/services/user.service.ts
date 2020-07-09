import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }


  public getData() {
    return this.http.get("https://cinema-verite.herokuapp.com/api/clientes/");
  }


}
