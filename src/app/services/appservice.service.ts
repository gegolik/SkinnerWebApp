import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  authenticated = this.estoyAutenticado();
private cookieValue:boolean;

  constructor(private http: HttpClient,private cookieService:CookieService) { }
  authenticate(credentials, callback) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

      const data = credentials ? {'email': credentials.username, 'password': credentials.password} : {};

    
    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.post('http://localhost:8080/login',data,config).subscribe(response => {
        if (response['id']) {
            this.authenticated = true;
            this.cookieService.set('autenticado',response['id']);
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });

}
public   logOut() {
  this.cookieService.delete('autenticado');
}
public estoyAutenticado(){
  this.cookieValue=this.cookieService.check('autenticado');
if(this.cookieValue){
  return true;
}

  return false;

}

  public getNotificaciones(dummyid:number) {
    return this.http.get("http://localhost:8080/asignaciones/count/"+dummyid);
  }
}
