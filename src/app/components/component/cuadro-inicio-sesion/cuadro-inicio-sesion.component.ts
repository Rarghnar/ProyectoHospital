import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuadro-inicio-sesion',
  templateUrl: './cuadro-inicio-sesion.component.html',
  styleUrls: ['./cuadro-inicio-sesion.component.less']
})
export class CuadroInicioSesionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  navegarInicio(){
    this.router.navigate(['/screen-home-ingresado']);
  }
}
