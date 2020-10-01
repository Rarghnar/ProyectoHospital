import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-paciente-card-nombre-admin',
  templateUrl: './paciente-card-nombre-admin.component.html',
  styleUrls: ['./paciente-card-nombre-admin.component.less']
})
export class PacienteCardNombreAdminComponent implements OnInit {

  @Input()
  public paciente:Paciente
  constructor() { }

  ngOnInit(): void {
  }

}
