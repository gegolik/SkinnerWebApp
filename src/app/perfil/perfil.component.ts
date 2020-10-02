import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {PerfilService} from '../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  conjuntoContrasenia = {passwordNueva: '', passwordNuevaRepetida: '', passwordVieja:''};
  incorrecta=false;
  passwordincorrecta=false;
  passwordCorrecta=false;
  cambiosCorrectos=false;
  user = {nombre: '', apellido: '', telefono:'', direccion:'',recibir_notificaciones:false };
  respuestaContrasenia:any;

  constructor(public cookieService:CookieService,public perfilService: PerfilService) {
    this.perfilService.getUser(parseInt(this.cookieService.get('autenticado'))).subscribe((usuario: any)=>{this.user=usuario});
   }

  ngOnInit(): void {
  }
   guardarPerfil(user){
    this.perfilService.cambiarUsuario(parseInt(this.cookieService.get('autenticado')),user).subscribe((pass: any)=>{  this.cambiosCorrectos=true;
    });
   }
   chequearcontrasenia(conjuntoContrasenia){


    if(conjuntoContrasenia.passwordNueva!=conjuntoContrasenia.passwordNuevaRepetida){
      this.incorrecta=true;
    }
    else{
      this.incorrecta=false;
      this.perfilService.cambiarPassword(parseInt(this.cookieService.get('autenticado')),conjuntoContrasenia).subscribe((pass: any)=>{
        if(pass.status==400){
          this.passwordincorrecta=true;
        }
        else
        {
        this.passwordincorrecta=false;
        this.passwordCorrecta=true;
        }
        });
      
    }
  

  }
}
