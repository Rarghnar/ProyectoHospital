import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-paciente3',
  templateUrl: './formulario-paciente3.component.html',
  styleUrls: ['./formulario-paciente3.component.less']
})
export class FormularioPaciente3Component implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  
  constructor(private router: Router) {
    this.checkoutForm = this.createFormGroup();

   }

  ngOnInit(): void {
  }
  navegarPaciente3() {
    this.router.navigate(['/screen-paciente-parte3']);
  }
  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      atencion: new FormControl('', [Validators.required]),
      motivo: new FormControl('', [Validators.required]),
      fechaIng: new FormControl('', [Validators.required]),
      horaIng: new FormControl('', [Validators.required]),
      fechaSal: new FormControl('', [Validators.required]),
      horaSal: new FormControl('', [Validators.required]),
      piso: new FormControl('', [Validators.required]),
      habitacion: new FormControl('', [Validators.required]),
      causa: new FormControl('', [Validators.required]),
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
  get atencion() { return this.checkoutForm.get('atencion');}
  get motivo() { return this.checkoutForm.get('motivo');}
  get fechaIng() { return this.checkoutForm.get('fechaIng');}
  get horaIng() { return this.checkoutForm.get('horaIng');}
  get fechaSal() { return this.checkoutForm.get('fechaSal');}
  get horaSal() { return this.checkoutForm.get('horaSal');}
  get piso() { return this.checkoutForm.get('piso');}
  get habitacion() { return this.checkoutForm.get('habitacion');}
  get causa() { return this.checkoutForm.get('causa');}
  //get password() { return this.checkoutForm.get('password'); }

}
