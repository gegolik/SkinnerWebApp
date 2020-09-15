import { Component } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from './services/user.service';
import { AppserviceService } from './services/appservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  respuesta=[]
  cantNotificaciones: any;
  http: any;
  private cookieValue: string;
  credentials = {username: '', password: ''};
  olvidarContrasenia=false;
  constructor(private app: AppserviceService,public cookieService:CookieService,public userService: UserService, public appService:AppserviceService,private route:ActivatedRoute,private router: Router) {
  this.userService.getData().subscribe((users: any)=>{this.respuesta=users});
  var id=this.route.snapshot.params.id;
  
  if(this.appService.estoyAutenticado()){
    setInterval(()=>{ this.appService.getNotificaciones(parseInt(this.cookieService.get('autenticado'))).subscribe((notificaciones: any)=>{this.cantNotificaciones=notificaciones;console.log("ENTRE")});},5000)
  }
  }
  logout() {
    this.appService.authenticated = false;
    this.appService.logOut();
    this.router.navigateByUrl('/login');

  }
  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }
  title = 'SkineerWebApp';
  ngOnInit() {
    //Toggle Click Function
$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
});
}
}
