import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../component/models/paciente.model';
import { PacienteService } from '../../services/paciente/paciente.service';

@Component({
  selector: 'app-screen-lista-pacientes',
  templateUrl: './screen-lista-pacientes.component.html',
  styleUrls: ['./screen-lista-pacientes.component.less']
})
export class ScreenListaPacientesComponent implements OnInit {

  public pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { 
    
  }

  ngOnInit(): void {
    this.pacientes = this.pacienteService.getAllPacientes();
  }
}