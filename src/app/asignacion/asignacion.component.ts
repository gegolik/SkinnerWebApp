import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../services/asignacion.service';
import { HistoriaLesionesService } from '../services/historia-lesiones.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {
  respuesta: any;
  respuestaAsignacion:any;

  constructor(public cookieService:CookieService, public asignacionService: AsignacionService, public lesionService:HistoriaLesionesService,private route:ActivatedRoute) {
    var id=this.route.snapshot.params.id;
    
    this.asignacionService.getAsignacionesPorUsuario(parseInt(this.cookieService.get('autenticado'))).subscribe((asignacion: any)=>{this.respuesta=asignacion});
   
  }

  ngOnInit(): void {
  }

public updateAsignacion(value:boolean,asignacionId:number){
this.asignacionService.updateAsignacionPorId(value,asignacionId).subscribe((asignacion: any)=>{this.asignacionService.getAsignacionesPorUsuario(parseInt(this.cookieService.get('autenticado'))).subscribe((asignacion: any)=>{this.respuesta=asignacion});
});

}
}
