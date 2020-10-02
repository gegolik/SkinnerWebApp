import { Component, OnInit } from '@angular/core';
import {AdministracionmedicosserviceService} from '../services/administracionmedicosservice.service' 
import {medicoObject} from "../Models/medico_model"
@Component({
  selector: 'app-administracionmedicos',
  templateUrl: './administracionmedicos.component.html',
  styleUrls: ['./administracionmedicos.component.css']
})
export class AdministracionmedicosComponent implements OnInit {
  medicos: any;
  nuevoMedico: medicoObject=new medicoObject();
  selected: medicoObject = null;
  selectedValue: string = '';
  listaMedicos: any;
  tipoLesiones: any;
  respuestaCreacion:any;
  constructor(public medicosService:AdministracionmedicosserviceService) { 
    this.getListaMedicos();
  }

  ngOnInit(): void {
  }
  public getListaMedicos() {
    this.medicosService.getMedicos().subscribe((medicos: any) => {
      this.listaMedicos = medicos;
    });
  }
  public limpiarMedico() {
    this.nuevoMedico = new medicoObject();
  }

  public removeMedico(medico: any) {
    if (confirm('¿Desea dar de baja al medico?')) {
      this.medicosService.deleteMedico(parseInt(medico.id)).subscribe(() => {
          this.getListaMedicos();
        });
    }
  }

  public assignMedico(med: medicoObject) {
    this.selected = med;
    Object.assign(this.nuevoMedico, med);
    console.log(this.nuevoMedico)
  }

  public agregarMedico(med: medicoObject) {
    console.log(this.nuevoMedico);
    this.medicosService.addMedico(this.nuevoMedico).subscribe((pass: any) => {
      this.respuestaCreacion=pass;
        this.getListaMedicos();
      });
  }
  public modificarMedico(med: medicoObject) {
    console.log(this.nuevoMedico);
    this.medicosService.modificarMedico(this.nuevoMedico).subscribe((response) => {
        this.getListaMedicos();
      });
  }
}
