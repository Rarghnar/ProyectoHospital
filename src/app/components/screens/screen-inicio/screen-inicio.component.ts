import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-inicio',
  templateUrl: './screen-inicio.component.html',
  styleUrls: ['./screen-inicio.component.less']
})
export class ScreenInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  navegarHome() {
    this.router.navigate(['/screen-home']);
  }
}
