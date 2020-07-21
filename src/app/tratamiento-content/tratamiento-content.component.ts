import { Component, OnInit } from '@angular/core';
import {tratamientoObject} from '../Models/tratamiento_model';

@Component({
  selector: 'app-tratamiento-content',
  templateUrl: './tratamiento-content.component.html',
  styleUrls: ['./tratamiento-content.component.css']
})
export class TratamientoContentComponent implements OnInit {
  
  
  nuevoTratamiento: any = {titulo:"", tipoLesion:"", descripcion:""};
  
  items: Array<any> = [{ article: 'Melanoma', value: 1 ,defaultSelected: true}, { article: 'Vitiligo', value: 2 }, { article: 'Psoriasis', value: 3 }];
  selectedValue: string = '';
     
    


  constructor() { }

  ngOnInit(): void {
  
    this.selectedValue = this.items.filter(a => a.defaultSelected)[0].value;
  }
  
  public persistirTratamiento() {
    console.log(this.nuevoTratamiento);
  }

}
