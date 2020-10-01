import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../component/models/paciente.model';
import { PacienteService } from '../../services/paciente/paciente.service';

@Component({
  selector: 'app-screen-lista-pacientes-admin',
  templateUrl: './screen-lista-pacientes-admin.component.html',
  styleUrls: ['./screen-lista-pacientes-admin.component.less']
})
export class ScreenListaPacientesAdminComponent implements OnInit {
  public pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { 
    
  }

  ngOnInit(): void {
    this.pacientes = this.pacienteService.getAllPacientes();
  }
}