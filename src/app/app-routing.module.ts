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
import { ScreenPacienteParte2Component } from './components/screens/screen-paciente-parte2/screen-paciente-parte2.component';
import { ScreenHomeAdminComponent } from './components/screens/screen-home-admin/screen-home-admin.component';
import { ScreenRegistrarMedComponent } from './components/screens/screen-registrar-med/screen-registrar-med.component';
import { ScreenRegistrarEnferComponent } from './components/screens/screen-registrar-enfer/screen-registrar-enfer.component';
import { ScreenHabitacionesLibresComponent } from './components/screens/screen-habitaciones-libres/screen-habitaciones-libres.component';
import { ScreenHabitacionesAdminComponent } from './components/screens/screen-habitaciones-admin/screen-habitaciones-admin.component';
import { ScreenHabitacionesLibresAdminComponent } from './components/screens/screen-habitaciones-libres-admin/screen-habitaciones-libres-admin.component';
import { ScreenPacienteAdminComponent } from './components/screens/screen-paciente-admin/screen-paciente-admin.component';
import { ScreenContactosAdminComponent } from './components/screens/screen-contactos-admin/screen-contactos-admin.component';
import { ScreenAcercaDeAdminComponent } from './components/screens/screen-acerca-de-admin/screen-acerca-de-admin.component';
import { ScreenListaPacientesComponent } from './components/screens/screen-lista-pacientes/screen-lista-pacientes.component';
import { ScreenListaPacientesAdminComponent } from './components/screens/screen-lista-pacientes-admin/screen-lista-pacientes-admin.component';
import { ScreenInfoPacienteComponent } from './components/screens/screen-info-paciente/screen-info-paciente.component';
import { ScreenInfoPacienteAdminComponent } from './components/screens/screen-info-paciente-admin/screen-info-paciente-admin.component';
import { ScreenPacienteParte3AdminComponent } from './components/screens/screen-paciente-parte3-admin/screen-paciente-parte3-admin.component';

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
  { path: 'screen-paciente-parte2', component: ScreenPacienteParte2Component },
  { path: 'screen-home-admin', component: ScreenHomeAdminComponent },
  { path: 'screen-registrar-med', component: ScreenRegistrarMedComponent },
  { path: 'screen-registrar-enfer', component: ScreenRegistrarEnferComponent },
  { path: 'screen-habitaciones-libres', component: ScreenHabitacionesLibresComponent },
  { path: 'screen-habitaciones-admin', component: ScreenHabitacionesAdminComponent },
  { path: 'screen-habitaciones-libres-admin', component: ScreenHabitacionesLibresAdminComponent },
  { path: 'screen-paciente-admin', component: ScreenPacienteAdminComponent },
  { path: 'screen-paciente-parte2-admin', component: ScreenPacienteParte2Component },
  { path: 'screen-contactos-admin', component: ScreenContactosAdminComponent },
  { path: 'screen-acerca-de-admin', component: ScreenAcercaDeAdminComponent },
  { path: 'screen-lista-pacientes', component: ScreenListaPacientesComponent },
  { path: 'screen-lista-pacientes-admin', component: ScreenListaPacientesAdminComponent },
  { path: 'screen-info-paciente', component: ScreenInfoPacienteComponent },
  { path: 'screen-info-paciente-admin', component: ScreenInfoPacienteAdminComponent },
  {path: 'screen-paciente-parte3-admin', component: ScreenPacienteParte3AdminComponent},
  {path: '', redirectTo: '/screen-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
