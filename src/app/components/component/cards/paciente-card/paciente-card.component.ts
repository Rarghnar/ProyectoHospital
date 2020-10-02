import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-paciente-card',
  templateUrl: './paciente-card.component.html',
  styleUrls: ['./paciente-card.component.less']
})
export class PacienteCardComponent implements OnInit {

  @Input()
  public paciente: Paciente;

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.mensaje="Nueva Contraseña Enviada";
    this.isDivVisible=true;
  }
}
