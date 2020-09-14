import { Component, OnInit } from '@angular/core';
import { RecomendacionServiceService } from '../services/recomendacion-service.service';
import { recomendacionObject } from '../Models/recomendacion_model';
import { LesionService } from '../services/lesion.service';


@Component({
  selector: 'app-recomendaciones-content',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css'],
})
export class RecomendacionContentComponent implements OnInit {
  recomendaciones: any;
  nuevorecomendacion: recomendacionObject = new recomendacionObject();
  selected: recomendacionObject = null;
  selectedValue: string = '';
  listarecomendaciones: any;
  tipoLesiones: any;
  constructor(public recomservice: RecomendacionServiceService, public lesionService: LesionService) {
    this.getRecomendaciones();
    this.getTipoLesiones();
  }

  ngOnInit(): void {
    
  }

  public getRecomendaciones() {
    this.recomservice.getRecomendaciones().subscribe((recomendaciones: any) => {
      this.listarecomendaciones = recomendaciones;
    });
  }

  public getTipoLesiones() {
    this.lesionService.getTipoLesiones().subscribe((tipos: any) => {
      this.tipoLesiones = tipos;
      console.log(tipos)
    });
  }

  
  public agregarrecomendacion(recom: recomendacionObject) {
    console.log(this.nuevorecomendacion);
    this.recomservice
      .addRecomendacion(this.nuevorecomendacion)
      .subscribe((response) => {
        this.getRecomendaciones();
      });
  }

  public limpiarrecomendacion() {
    this.nuevorecomendacion = new recomendacionObject();
  }

  public removerecomendacion(recomendacion: any) {
    if (confirm('¿Desea eliminar la recomendacion?')) {
      this.recomservice
        .deleteRecomendacion(parseInt(recomendacion.id))
        .subscribe(() => {
          this.getRecomendaciones();
        });
    }
  }

  public assignrecomendacion(recom: recomendacionObject) {
    this.selected = recom;
    Object.assign(this.nuevorecomendacion, recom);
    console.log(this.nuevorecomendacion)
  }
}
