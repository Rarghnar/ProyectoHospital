import { Injectable } from '@angular/core';
import { Paciente } from '../../component/models/paciente.model';
import { PACIENTES } from 'src/app/components/services/paciente/PACIENTES.const';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private pacientes: Paciente[];
  constructor() { 
    this.pacientes = PACIENTES;
  }

  public getAllPacientes(): Paciente[]{
    return this.pacientes;
  }

  public getPacienteById(id:number){
    return this.pacientes.find((paciente: Paciente) => paciente._id == id);
    
  }

}
