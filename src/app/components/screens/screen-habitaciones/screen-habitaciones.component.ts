import { Component, OnInit } from '@angular/core';
//----------------------------
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-screen-habitaciones',
  templateUrl: './screen-habitaciones.component.html',
  styleUrls: ['./screen-habitaciones.component.less']
})
export class ScreenHabitacionesComponent implements OnInit {

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
