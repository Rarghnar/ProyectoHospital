import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../../component/models/paciente.model';
import { PacienteService } from '../../services/paciente/paciente.service';

@Component({
  selector: 'app-screen-info-paciente',
  templateUrl: './screen-info-paciente.component.html',
  styleUrls: ['./screen-info-paciente.component.less']
})
export class ScreenInfoPacienteComponent implements OnInit {

  public id: number;
  public paciente: Paciente;

  constructor(
    private pacienteService: PacienteService,
    private activedroute: ActivatedRoute
    
    ) {
   
    
    this.id = activedroute.snapshot.params['id'];
  }
 

  ngOnInit(): void {
    this.paciente = this.pacienteService.getPacienteById(this.id);
  }
}