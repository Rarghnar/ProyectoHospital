import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenHomeComponent } from './components/screens/screen-home/screen-home.component';
import { ScreenInicioComponent } from './components/screens/screen-inicio/screen-inicio.component';

const routes: Routes = [
  {path: 'screen-home', component: ScreenHomeComponent },
  { path: 'screen-inicio', component: ScreenInicioComponent },
  {path: '', redirectTo: '/screen-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
