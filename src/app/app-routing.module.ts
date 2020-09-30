import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenContactosComponent } from './components/screens/screen-contactos/screen-contactos.component';
import { ScreenHomeComponent } from './components/screens/screen-home/screen-home.component';
import { ScreenInicioComponent } from './components/screens/screen-inicio/screen-inicio.component';
import { ScreenAcercaDeComponent } from './components/screens/screen-acerca-de/screen-acerca-de.component';
import { ScreenHomeIngresadoComponent } from './components/screens/screen-home-ingresado/screen-home-ingresado.component';
import { ScreenContactosInComponent } from './components/screens/screen-contactos-in/screen-contactos-in.component';
import { ScreenAcercaDeInComponent } from './components/screens/screen-acerca-de-in/screen-acerca-de-in.component';
import { ScreenPacienteComponent } from './components/screens/screen-paciente/screen-paciente.component';
import { ScreenHabitacionesComponent } from './components/screens/screen-habitaciones/screen-habitaciones.component';
import { ScreenAgregarMedicoComponent } from './components/screens/screen-agregar-medico/screen-agregar-medico.component';
import { ScreenPacienteParte2Component } from './components/screens/screen-paciente-parte2/screen-paciente-parte2.component';
import { ScreenHomeAdminComponent } from './components/screens/screen-home-admin/screen-home-admin.component';
import { ScreenRegistrarMedComponent } from './components/screens/screen-registrar-med/screen-registrar-med.component';
import { ScreenRegistrarEnferComponent } from './components/screens/screen-registrar-enfer/screen-registrar-enfer.component';

const routes: Routes = [
  {path: 'screen-home', component: ScreenHomeComponent },
  { path: 'screen-inicio', component: ScreenInicioComponent },
  { path: 'screen-contactos', component: ScreenContactosComponent },
  { path: 'screen-acerca-de', component: ScreenAcercaDeComponent },
  { path: 'screen-home-ingresado', component: ScreenHomeIngresadoComponent },
  { path: 'screen-contactos-in', component: ScreenContactosInComponent },
  { path: 'screen-acerca-de-in', component: ScreenAcercaDeInComponent },
  { path: 'screen-paciente', component: ScreenPacienteComponent },
  { path: 'screen-habitaciones', component: ScreenHabitacionesComponent },
  { path: 'screen-agregar-medico', component: ScreenAgregarMedicoComponent },
  { path: 'screen-paciente-parte2', component: ScreenPacienteParte2Component },
  { path: 'screen-home-admin', component: ScreenHomeAdminComponent },
  { path: 'screen-registrar-med', component: ScreenRegistrarMedComponent },
  {path: 'screen-registrar-enfer', component: ScreenRegistrarEnferComponent},
  {path: '', redirectTo: '/screen-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
