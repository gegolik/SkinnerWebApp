import { Component, OnInit } from '@angular/core';
import { LesionService } from '../services/lesion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-lesiones',
  templateUrl: './listado-lesiones.component.html',
  styleUrls: ['./listado-lesiones.component.css']
})
export class ListadoLesionesComponent implements OnInit {
  respuesta: any;

  constructor(public lesionService: LesionService,private route:ActivatedRoute) { 
    var id=this.route.snapshot.params.id;
    this.lesionService.getLesionesPorUsuario(id).subscribe((lesiones: any)=>{this.respuesta=lesiones});
  }
public getUrl(imagen){
return "data:image/png;base64,"+imagen;
}
  ngOnInit(): void {
  }

}
