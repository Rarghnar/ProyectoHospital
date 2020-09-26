import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-home-ingresado',
  templateUrl: './screen-home-ingresado.component.html',
  styleUrls: ['./screen-home-ingresado.component.less']
})
export class ScreenHomeIngresadoComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  navegarPaciente() {
    this.router.navigate(['/screen-paciente']);
  }

}
