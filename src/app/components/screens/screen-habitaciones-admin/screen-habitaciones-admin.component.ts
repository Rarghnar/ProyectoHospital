import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Paciente } from '../../component/models/paciente.model';
import { PacienteService } from '../../services/paciente/paciente.service';

@Component({
  selector: 'app-screen-habitaciones-admin',
  templateUrl: './screen-habitaciones-admin.component.html',
  styleUrls: ['./screen-habitaciones-admin.component.less']
})
export class ScreenHabitacionesAdminComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  
  public pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.pacientes = this.pacienteService.getAllPacientes();
  }

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required])
    });
  }

  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }

}
