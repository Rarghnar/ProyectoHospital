import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-home',
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.less']
})
export class ScreenHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  navegarInicio(){
    this.router.navigate(['/screen-inicio']);
  }
}
