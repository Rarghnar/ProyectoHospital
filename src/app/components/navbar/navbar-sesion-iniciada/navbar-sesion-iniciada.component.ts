import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-sesion-iniciada',
  templateUrl: './navbar-sesion-iniciada.component.html',
  styleUrls: ['./navbar-sesion-iniciada.component.less']
})
export class NavbarSesionIniciadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getUrl(): string{
    return this.router.url;
  }
}
