import { Component, OnInit } from '@angular/core';
import { LesionService } from '../services/lesion.service';
import { ActivatedRoute } from '@angular/router';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

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
  };
  public pieChartLabels: Label[] = [['Melanoma'], ['Vitiligo'], ['Lunar'], 'Psoriasis'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(public lesionService: LesionService,private route:ActivatedRoute) { 
    var id=this.route.snapshot.params.id;
    this.lesionService.getLesionesPorUsuario(id).subscribe((lesiones: any)=>{this.respuesta=lesiones;});
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
