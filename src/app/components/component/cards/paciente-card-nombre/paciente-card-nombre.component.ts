import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-card-nombre',
  templateUrl: './paciente-card-nombre.component.html',
  styleUrls: ['./paciente-card-nombre.component.less']
})
export class PacienteCardNombreComponent implements OnInit {

  @Input()
  public paciente:Paciente
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegarinfo1( ){
    this.router.navigate(["/screen-paciente"]);
  }
  navegarinfo2( ){
    this.router.navigate(["/screen-paciente-admin"]);
  }
  public getUrl(): string {
    return this.router.url;
  }

}
