import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-paciente-card-nombre',
  templateUrl: './paciente-card-nombre.component.html',
  styleUrls: ['./paciente-card-nombre.component.less']
})
export class PacienteCardNombreComponent implements OnInit {

  @Input()
  public paciente:Paciente
  constructor() { }

  ngOnInit(): void {
  }

}
