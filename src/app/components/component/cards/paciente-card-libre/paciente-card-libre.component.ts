import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';


@Component({
  selector: 'app-paciente-card-libre',
  templateUrl: './paciente-card-libre.component.html',
  styleUrls: ['./paciente-card-libre.component.less']
})
export class PacienteCardLibreComponent implements OnInit {

  @Input()
  public paciente: Paciente;

  constructor() { }

  ngOnInit(): void {
  }

}
