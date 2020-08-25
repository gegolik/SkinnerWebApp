import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../services/tratamiento.service';
import { tratamientoObject } from '../Models/tratamiento_model';


@Component({
  selector: 'app-tratamiento-content',
  templateUrl: './tratamiento-content.component.html',
  styleUrls: ['./tratamiento-content.component.css']
})
export class TratamientoContentComponent implements OnInit {

  tratamientos:any
  nuevoTratamiento: tratamientoObject = new tratamientoObject();

  lesionItems: Array<any> = [{ name: 'Melanoma', value: 1, defaultSelected: true }, { name: 'Vitiligo', value: 2 }, { name: 'Psoriasis', value: 3 }];
  selectedValue: string = '';
  listaTratamientos: any;


  constructor(public tratservice: TratamientoService) { 

    this.tratservice.getTratamientos().subscribe((tratamientos: any)=>{this.listaTratamientos=tratamientos});

  }

  ngOnInit(): void {


    this.selectedValue = this.lesionItems.filter(a => a.defaultSelected)[0].value;
    console.log(this.tratamientos);
    itemToRemove: Number;

  }

  public persistirTratamiento(trat: tratamientoObject) {
    const index = this.tratamientos.indexOf(trat);
    if (index != -1) {
      this.tratservice.deleteTratamiento(this.tratamientos);;
    }
    this.tratservice.addTratamiento(JSON.parse(JSON.stringify(this.nuevoTratamiento)));
    this.limpiarTratamiento();
  }
  public agregarTratamiento(trat: tratamientoObject) {

    this.tratservice.addTratamiento(JSON.parse(JSON.stringify(this.nuevoTratamiento)));
  }

  public limpiarTratamiento() {
    this.nuevoTratamiento = new tratamientoObject();
  }

  public removeTratamiento(tratamiento: any) {
    if (confirm("¿Desea eliminar el tratamiento?")) {
      this.tratservice.deleteTratamiento(parseInt(tratamiento.id)).subscribe((cosa: any)=>{console.log(cosa)});
    }
  }

  public assignTratamiento(trat: tratamientoObject) {
    this.nuevoTratamiento = trat;
  }



}
