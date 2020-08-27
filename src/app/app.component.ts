import { Component } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from './services/user.service';
import { AppserviceService } from './services/appservice.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private app: AppserviceService,public userService: UserService, public appService:AppserviceService,private route:ActivatedRoute,private router: Router) {
  this.userService.getData().subscribe((users: any)=>{this.respuesta=users});
  var id=this.route.snapshot.params.id;
  this.appService.getNotificaciones(6).subscribe((notificaciones: any)=>{this.cantNotificaciones=notificaciones});
  this.appService.estoyAutenticado();
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
