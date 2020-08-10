import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaLesionesService } from '../services/historia-lesiones.service';

@Component({
  selector: 'app-historial-lesiones',
  templateUrl: './historial-lesiones.component.html',
  styleUrls: ['./historial-lesiones.component.css']
})
export class HistorialLesionesComponent implements OnInit {
historialLesion : any
  constructor(public historiaLesionesService: HistoriaLesionesService,private route:ActivatedRoute) {
    var id=this.route.snapshot.params.id;
    this.historiaLesionesService.getHistorialLesionesPorId(id).subscribe((lesiones: any)=>{this.historialLesion=lesiones});

   }

  ngOnInit(): void {
  }

}
