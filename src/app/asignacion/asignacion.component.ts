import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../services/asignacion.service';
import { HistoriaLesionesService } from '../services/historia-lesiones.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {
  respuesta: any;
  respuestaAsignacion:any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'label',
      callbacks: {
          label: function(tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
      }
  },
  };
  public pieChartLabels: Label[] = [['Melanoma'], ['Vitiligo'], ['Lunar'], 'Psoriasis'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(public cookieService:CookieService, public asignacionService: AsignacionService, public lesionService:HistoriaLesionesService,private route:ActivatedRoute) {
    var id=this.route.snapshot.params.id;
    
    this.asignacionService.getAsignacionesPorUsuario(parseInt(this.cookieService.get('autenticado'))).subscribe((asignacion: any)=>{this.respuesta=asignacion;       for (let index = 0; index < asignacion.length; index++) {
      var lesion = asignacion[index];
      lesion.charData = this.getChartData(lesion.analisis)
    }});
   
  }

  ngOnInit(): void {
  }

public updateAsignacion(value:boolean,asignacionId:number){
this.asignacionService.updateAsignacionPorId(value,asignacionId).subscribe((asignacion: any)=>{this.asignacionService.getAsignacionesPorUsuario(parseInt(this.cookieService.get('autenticado'))).subscribe((asignacion: any)=>{this.respuesta=asignacion});
});

}
public getChartData(resultadoAnalisis:any){
  var resultadoParse=JSON.parse(resultadoAnalisis);
  resultadoParse.melanoma= Math.round(resultadoParse.melanoma*100);
  resultadoParse.vitiligo= Math.round(resultadoParse.vitiligo*100);
  resultadoParse.lunar= Math.round(resultadoParse.lunar*100);
  resultadoParse.psoriasis= Math.round(resultadoParse.psoriasis*100);
  var arrayResultado:SingleDataSet=[resultadoParse.melanoma,resultadoParse.vitiligo,resultadoParse.lunar,resultadoParse.psoriasis]
 return arrayResultado;
 }
}
