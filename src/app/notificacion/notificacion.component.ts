import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../services/asignacion.service';
import { HistoriaLesionesService } from '../services/historia-lesiones.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ChartType, ChartOptions } from 'chart.js';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {
  respuesta: any;
  respuestaAsignacion: any;
  constructor(
    public appComponent: AppComponent,
    public cookieService: CookieService,
    public asignacionService: AsignacionService,
    public lesionService: HistoriaLesionesService,
    private route: ActivatedRoute

  ) {    var id = this.route.snapshot.params.id;
    this.appComponent.loading = false;
    this.traerAsignaciones(); }

  ngOnInit(): void {
  }
  public borrarNotificacion(asignacionId: number) {

    this.asignacionService
      .borrarNotificacionPorId(asignacionId)
      .subscribe((asignacion: any) => {

      });
  }

  public traerAsignaciones() {
    this.appComponent.loading = true;
    try {
      this.asignacionService
        .getNotificacionesPorUsuario(
          parseInt(this.cookieService.get('autenticado'))
        )
        .subscribe((asignacion: any) => {
          this.respuesta = asignacion;
          for (let index = 0; index < asignacion.length; index++) {
            var lesion = asignacion[index];
          }
          this.appComponent.loading = false;
        });
    } catch (error) {
      this.appComponent.loading = false;
    } 
  }
}

