import { Component } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from './services/user.service';
import { AppserviceService } from './services/appservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  respuesta=[]
  cantNotificaciones: any;

  constructor(public userService: UserService, public appService:AppserviceService,private route:ActivatedRoute) {
  this.userService.getData().subscribe((users: any)=>{this.respuesta=users});
  var id=this.route.snapshot.params.id;
  this.appService.getNotificaciones(6).subscribe((notificaciones: any)=>{this.cantNotificaciones=notificaciones});

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
