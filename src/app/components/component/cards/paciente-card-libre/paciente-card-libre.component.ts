import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../../models/paciente.model';


@Component({
  selector: 'app-paciente-card-libre',
  templateUrl: './paciente-card-libre.component.html',
  styleUrls: ['./paciente-card-libre.component.less']
})
export class PacienteCardLibreComponent implements OnInit {

  @Input()
  public paciente: Paciente;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarinfo( ){
    this.router.navigate(["/screen-paciente"]);
  }


}
