import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppserviceService } from '../services/appservice.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  respuesta=[]

  constructor(public userService: UserService,public app:AppserviceService,public cookieService:CookieService) {
  this.userService.getDataPacientes(parseInt(this.cookieService.get('autenticado'))).subscribe((users: any)=>{this.respuesta=users});
  }
  authenticated() { return this.app.authenticated; }
  ngOnInit(): void {


    



  }

}
