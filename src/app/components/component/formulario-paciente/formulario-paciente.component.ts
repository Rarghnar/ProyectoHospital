import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.less']
})
export class FormularioPacienteComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor() { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      fechaNac: new FormControl('', [Validators.required]),
      //password: new FormControl('',[Validators.required])
    });
  }

  onSubmit(){
    this.mensaje="Paciente Agregado";
    this.isDivVisible=true;
  }

  get nombres() { return this.checkoutForm.get('nombres'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get apellidos() { return this.checkoutForm.get('apellidos'); }
  get fechaNac() { return this.checkoutForm.get('fechaNac');}
  //get password() { return this.checkoutForm.get('password'); }
}
