import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../services/tratamiento.service';
import { tratamientoObject } from '../Models/tratamiento_model';
import { LesionService } from '../services/lesion.service';

@Component({
  selector: 'app-tratamiento-content',
  templateUrl: './tratamiento-content.component.html',
  styleUrls: ['./tratamiento-content.component.css'],
})
export class TratamientoContentComponent implements OnInit {
  tratamientos: any;
  nuevoTratamiento: tratamientoObject = new tratamientoObject();
  selected: tratamientoObject = null;
  selectedValue: string = '';
  listaTratamientos: any;
  tipoLesiones: any;

  constructor(public tratservice: TratamientoService, public lesionService: LesionService) {
    this.getTratamientos();
    this.getTipoLesiones();
  }

  ngOnInit(): void {
    
  }

  public getTratamientos() {
    this.tratservice.getTratamientos().subscribe((tratamientos: any) => {
      this.listaTratamientos = tratamientos;
    });
  }

  public getTipoLesiones() {
    this.lesionService.getTipoLesiones().subscribe((tipos: any) => {
      this.tipoLesiones = tipos;
      console.log(tipos)
    });
  }

  public persistirTratamiento(trat: tratamientoObject) {
    console.log('PERSISTIR');
    const index = this.tratamientos.indexOf(trat);
    if (index != -1) {
      this.tratservice.deleteTratamiento(this.tratamientos);
    }
    this.tratservice
      .addTratamiento(this.nuevoTratamiento)
      .subscribe((response) => {
        console.log(response);
      });
    this.limpiarTratamiento();
  }
  public agregarTratamiento(trat: tratamientoObject) {
    console.log(this.nuevoTratamiento);
    this.tratservice
      .addTratamiento(this.nuevoTratamiento)
      .subscribe((response) => {
        this.getTratamientos();
      });
  }

  public limpiarTratamiento() {
    this.nuevoTratamiento = new tratamientoObject();
  }

  public removeTratamiento(tratamiento: any) {
    if (confirm('¿Desea eliminar el tratamiento?')) {
      this.tratservice
        .deleteTratamiento(parseInt(tratamiento.id))
        .subscribe(() => {
          this.getTratamientos();
        });
    }
  }

  public assignTratamiento(trat: tratamientoObject) {
    this.selected = trat;
    Object.assign(this.nuevoTratamiento, trat);
    console.log(this.nuevoTratamiento)
  }
}
