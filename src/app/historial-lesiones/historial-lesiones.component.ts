import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaLesionesService } from '../services/historia-lesiones.service';

@Component({
  selector: 'app-historial-lesiones',
  templateUrl: './historial-lesiones.component.html',
  styleUrls: ['./historial-lesiones.component.css']
})
export class HistorialLesionesComponent implements OnInit {
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';
  entries = [
    {
      header: 'header',
      content: 'content'
    }
  ]

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content'
    })
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
historialLesion : any
  constructor(public historiaLesionesService: HistoriaLesionesService,private route:ActivatedRoute) {
    var id=this.route.snapshot.params.id;
    this.historiaLesionesService.getHistorialLesionesPorId(id).subscribe((lesiones: any)=>{this.historialLesion=lesiones});

   }

  ngOnInit(): void {
  }

}
