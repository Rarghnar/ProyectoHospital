import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenContactosComponent } from './components/screens/screen-contactos/screen-contactos.component';
import { ScreenHomeComponent } from './components/screens/screen-home/screen-home.component';
import { ScreenInicioComponent } from './components/screens/screen-inicio/screen-inicio.component';
import { ScreenAcercaDeComponent } from './components/screens/screen-acerca-de/screen-acerca-de.component';
import { ScreenHomeIngresadoComponent } from './components/screens/screen-home-ingresado/screen-home-ingresado.component';
import { ScreenContactosInComponent } from './components/screens/screen-contactos-in/screen-contactos-in.component';
import { ScreenAcercaDeInComponent } from './components/screens/screen-acerca-de-in/screen-acerca-de-in.component';

const routes: Routes = [
  {path: 'screen-home', component: ScreenHomeComponent },
  { path: 'screen-inicio', component: ScreenInicioComponent },
  { path: 'screen-contactos', component: ScreenContactosComponent },
  { path: 'screen-acerca-de', component: ScreenAcercaDeComponent },
  { path: 'screen-home-ingresado', component: ScreenHomeIngresadoComponent },
  { path: 'screen-contactos-in', component: ScreenContactosInComponent },
  {path: 'screen-acerca-de-in', component: ScreenAcercaDeInComponent},
  {path: '', redirectTo: '/screen-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
