import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaLesionesService } from '../services/historia-lesiones.service';
import { TratamientoService } from '../services/tratamiento.service';
import { AdicionalesService } from '../services/adicionales.service';
import { MensajeService } from '../services/mensaje.service';
import { CookieService } from 'ngx-cookie-service';
import {LesionService} from '../services/lesion.service';
import {UserService} from '../services/user.service';
declare var $: any;
@Component({
  selector: 'app-historial-lesiones',
  templateUrl: './historial-lesiones.component.html',
  styleUrls: ['./historial-lesiones.component.css']
})
export class HistorialLesionesComponent implements OnInit {
  @ViewChild('ventanaChat') private myScrollContainer: ElementRef;
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  nuevoMedico:any
  historial:any;
  side = 'left';
  hide = false;
  entries = [
    {
      header: 'header',
      content: 'content'
    }
  ]

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content'
    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

 /* public modificarHistorialComentarios(hist: any) {
   
    this.historiaLesionesService.modificarLesiones(this.nuevoMedico).subscribe((response) => {
        this.getListaMedicos();
      });
  }
  */
historialLesion : any;
listaTratamientosAsignados:any;
listaAdicionales:any;
listaTratamientos:any;
tratamientoAAsignar:any;
lesionAAsignar:any;
listaMensajes:any;
id:any;
idLesion:any;
idDoctor:any;
listaLesiones:any;
listaTipoLesiones:any;
listaUsuarios:any;
mensajeAEnviar:any;
recibeNotificaciones:any;
  constructor(public userService:UserService,public lesionService:LesionService,public mensajeSevice:MensajeService, public historiaLesionesService: HistoriaLesionesService,public adicionalesService: AdicionalesService, private route:ActivatedRoute,public tratservice:TratamientoService,public cookieService:CookieService) {
    this.id=this.route.snapshot.params.id;
    this.historiaLesionesService.getHistorialLesionesPorId(this.id).subscribe((lesiones: any)=>{
      this.historialLesion=lesiones
      
        let result = {};
        for (let i = 0; i < lesiones.length; i++) {
          const element = lesiones[i];
          if(lesiones[i].analisis && Object.entries(lesiones[i].analisis).length !== 0){
            lesiones[i].analisis = JSON.parse(lesiones[i].analisis);
            console.log(lesiones[i].analisis)
          }else{
            lesiones[i].analisis = result;
          }
        }
    });
    this.historiaLesionesService.getTratamientosLesiones(this.id).subscribe((tratamientosasignados: any)=>{this.listaTratamientosAsignados=tratamientosasignados})
    this.lesionService.getUsuariosPorLesionId(this.id).subscribe((usuarios: any) => {this.listaUsuarios = usuarios[0];this.mensajeSevice.getMensajes(this.id).subscribe((mensajes: any) => {this.listaMensajes = mensajes; this.scrollToBottom();});});
    this.lesionService.getLesionPorId(this.id).subscribe((lesion: any) => {this.listaLesiones = lesion;    this.tratservice.getTratamientosById(parseInt(this.listaLesiones[0].id_tipo)).subscribe((tratamientos: any) => {this.listaTratamientos = tratamientos});
  });
    this.idDoctor=parseInt(this.cookieService.get('autenticado'));
    this.lesionService.getTipoLesiones().subscribe((tipoLesiones: any) => {this.listaTipoLesiones = tipoLesiones});
    this.userService.getRecibeNotificaciones(parseInt(this.cookieService.get('autenticado'))).subscribe((recibenoticaciones: any) => {this.recibeNotificaciones = recibenoticaciones.recibir_notificaciones});
    
  }

  asignarTratamiento(tratamientoAAsignar:any){

      console.log(this.tratamientoAAsignar);
      this.historiaLesionesService.asignarTratamientos(this.tratamientoAAsignar,this.id).subscribe((response) => {this.actualizarTratamientos(); });
    
  }

  actualizarTratamientos(){
    this.historiaLesionesService.getTratamientosLesiones(this.id).subscribe((tratamientosasignados: any)=>{this.listaTratamientosAsignados=tratamientosasignados})
  }

  borrarTratamiento(tratamientoAAsignar:any){
    this.historiaLesionesService.borrarAsignacionTratamiento(tratamientoAAsignar).subscribe(()=>{this.actualizarTratamientos();})

  }
  setMensaje(mensaje:any){

    this.mensajeSevice.createMensaje(mensaje,this.idDoctor,this.listaUsuarios.id_paciente,parseInt(this.id)).subscribe((mensajes: any)=>{this.mensajeAEnviar="";     this.mensajeSevice.getMensajes(this.id).subscribe((mensajes: any) => {this.listaMensajes = mensajes; this.scrollToBottom();});
  })
  }

    getAdicionales(idLesion){
    this.adicionalesService.getAdicionales(idLesion).subscribe((adicionales: any)=>{this.listaAdicionales=adicionales;this.idLesion=idLesion})
  }

    asignarLesion(idTipoLesion){
      this.lesionService.modificarLesiones(idTipoLesion,this.listaLesiones,this.id).subscribe(()=>{ this.lesionService.getLesionPorId(this.id).subscribe((lesion: any) => {this.listaLesiones = lesion;this.tratservice.getTratamientosById(parseInt(this.listaLesiones[0].id_tipo)).subscribe((tratamientos: any) => {this.listaTratamientos = tratamientos})});})
    }

    borrarAdicionales(idTipo:number){
    this.adicionalesService.deleteAdicionales(idTipo,this.idLesion).subscribe(()=>{this.adicionalesService.getAdicionales(this.idLesion).subscribe((adicionales: any)=>{this.listaAdicionales=adicionales})  })
  }
  ngOnInit(): void {
    this.scrollToBottom();
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

scrollToBottom(): void {
  try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  } catch(err) { }                 
}

actualizarAnalisis(historial){
  this.historiaLesionesService.actualizarAnalisis(historial).subscribe(()=>{this.actualizarTratamientos();})
}

checkValue(analisis, valor, tipo){
  if(!valor || valor < 1){
    if(tipo == 'diametro'){
      analisis.diametro = 1;
    }else if(tipo == 'palmas'){
      analisis.palmas = 1;
    }
  }
}

}
