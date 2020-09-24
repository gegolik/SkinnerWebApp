import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaLesionesService } from '../services/historia-lesiones.service';
import { TratamientoService } from '../services/tratamiento.service';
import { AdicionalesService } from '../services/adicionales.service'
@Component({
  selector: 'app-historial-lesiones',
  templateUrl: './historial-lesiones.component.html',
  styleUrls: ['./historial-lesiones.component.css']
})
export class HistorialLesionesComponent implements OnInit {
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
id:any;
idLesion:any;
  constructor(public historiaLesionesService: HistoriaLesionesService,public adicionalesService: AdicionalesService, private route:ActivatedRoute,public tratservice:TratamientoService) {
    this.id=this.route.snapshot.params.id;
    this.historiaLesionesService.getHistorialLesionesPorId(this.id).subscribe((lesiones: any)=>{this.historialLesion=lesiones});
    this.historiaLesionesService.getTratamientosLesiones(this.id).subscribe((tratamientosasignados: any)=>{this.listaTratamientosAsignados=tratamientosasignados})
    this.tratservice.getTratamientos().subscribe((tratamientos: any) => {this.listaTratamientos = tratamientos});
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

    getAdicionales(idLesion){
    this.adicionalesService.getAdicionales(idLesion).subscribe((adicionales: any)=>{this.listaAdicionales=adicionales})
  }

    borrarAdicionales(idLesion:any){
    this.adicionalesService.deleteAdicionales(this.idLesion).subscribe(()=>{})

  }
  ngOnInit(): void {
  }

}
