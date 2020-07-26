import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../services/tratamiento.service';
import { tratamientoObject } from '../Models/tratamiento_model';


@Component({
  selector: 'app-tratamiento-content',
  templateUrl: './tratamiento-content.component.html',
  styleUrls: ['./tratamiento-content.component.css']
})
export class TratamientoContentComponent implements OnInit {

  tratamientos: Array<tratamientoObject>;
  nuevoTratamiento: tratamientoObject = new tratamientoObject();

  lesionItems: Array<any> = [{ name: 'Melanoma', value: 1, defaultSelected: true }, { name: 'Vitiligo', value: 2 }, { name: 'Psoriasis', value: 3 }];
  selectedValue: string = '';


  constructor(private tratservice: TratamientoService) { }

  ngOnInit(): void {

    this.selectedValue = this.lesionItems.filter(a => a.defaultSelected)[0].value;
    this.tratamientos = this.tratservice.getTratamientos();
    console.log(this.tratamientos);
    itemToRemove: Number;

  }

  public persistirTratamiento(trat: tratamientoObject) {
    const index = this.tratamientos.indexOf(trat);
    if(index != -1){
      this.tratamientos.splice(index,1); 
      console.log(index)    
     }
     
    this.tratservice.addTratamiento(JSON.parse(JSON.stringify(this.nuevoTratamiento)));
     
    
    this.limpiarTratamiento();
  }

  public limpiarTratamiento() {
    this.nuevoTratamiento = new tratamientoObject();
  }

  public removeTratamiento (trat: tratamientoObject){
    if(confirm("¿Desea eliminar el tratamiento?")) {
      const index = this.tratamientos.indexOf(trat);
      console.log(trat);
      this.tratamientos.splice(index,1);
    }
  }

  public assignTratamiento(trat: tratamientoObject){
    this.nuevoTratamiento = trat;
  }
  


}
