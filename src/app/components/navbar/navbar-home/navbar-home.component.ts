import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.less']
})
export class NavbarHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getUrl(): string {
    return this.router.url;
  }
}
