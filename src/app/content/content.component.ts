import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppserviceService } from '../services/appservice.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  respuesta = [];

  constructor(
    public userService: UserService,
    public app: AppserviceService,
    public cookieService: CookieService,
    private router: Router
  ) {
    console.log('PACIENTES');
    let id = this.cookieService.get('autenticado');
    if(id){
      this.userService
        .getDataPacientes(parseInt(id))
        .subscribe((users: any) => {
          this.respuesta = users;
        });
    }

  }
  authenticated() {
    return this.app.authenticated;
  }
  ngOnInit(): void {}
}
