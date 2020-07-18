import { Component, OnInit } from '@angular/core';
import { Tratamiento } from '../app.module';

@Component({
  selector: 'app-tratamiento-content',
  templateUrl: './tratamiento-content.component.html',
  styleUrls: ['./tratamiento-content.component.css']
})
export class TratamientoContentComponent implements OnInit {
  

    tratamiento: TratamientoObject;


  constructor() { }

  ngOnInit(): void {
  
  }
  


}
