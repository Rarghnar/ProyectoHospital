import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-home-admin',
  templateUrl: './screen-home-admin.component.html',
  styleUrls: ['./screen-home-admin.component.less']
})
export class ScreenHomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    // tslint:disable-next-line: typedef
    navegarPaciente() {
      this.router.navigate(['/screen-paciente']);
    }
  
    // tslint:disable-next-line: typedef
    navegarHabitaciones() {
      this.router.navigate(['/screen-habitaciones']);
    }
  
    // tslint:disable-next-line: typedef
    navegarAgregarMedico() {
      this.router.navigate(['/screen-registrar-med']);
    }

}
