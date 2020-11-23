import { Component, OnInit } from '@angular/core';
import { LesionService } from '../services/lesion.service';
import { ActivatedRoute } from '@angular/router';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-listado-lesiones',
  templateUrl: './listado-lesiones.component.html',
  styleUrls: ['./listado-lesiones.component.css']
})
export class ListadoLesionesComponent implements OnInit {
  respuesta: any;
  numeros:any;
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
  public pieChartColors: Array < any > = [{
    backgroundColor: ['rgb(103,205,205)', 'rgb(101,204,101)', 'rgb(255,153,154)','rgb(255,204,104)']
 }];
  constructor(public lesionService: LesionService,private route:ActivatedRoute,public appComponent: AppComponent,
    ) { 
    var id=this.route.snapshot.params.id;
    this.appComponent.loading = true;
    try{
    this.lesionService.getLesionesPorUsuario(id).subscribe((lesiones: any)=>{
      this.respuesta=lesiones;
      for (let index = 0; index < lesiones.length; index++) {
        var lesion = lesiones[index];
        lesion.charData = this.getChartData(lesion.analisis)
      }
      this.appComponent.loading = false;

    });
  }
  catch(error){
    this.appComponent.loading = false;
  }
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
public getUrl(imagen){
return "data:image/png;base64,"+imagen;
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
  ngOnInit(): void {
  }

}
