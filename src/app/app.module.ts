import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenInicioComponent } from './components/screens/screen-inicio/screen-inicio.component';
import { ScreenHomeComponent } from './components/screens/screen-home/screen-home.component';
import { NavbarHomeComponent } from './components/navbar/navbar-home/navbar-home.component';
import { NavbarSesionIniciadaComponent } from './components/navbar/navbar-sesion-iniciada/navbar-sesion-iniciada.component';
import { CuadroInicioSesionComponent } from './components/component/cuadro-inicio-sesion/cuadro-inicio-sesion.component';
import { CuadroInicioSesionAdmComponent } from './components/component/cuadro-inicio-sesion-adm/cuadro-inicio-sesion-adm.component';
import { ScreenContactosComponent } from './components/screens/screen-contactos/screen-contactos.component';
import { ScreenAcercaDeComponent } from './components/screens/screen-acerca-de/screen-acerca-de.component';
import { ScreenHomeIngresadoComponent } from './components/screens/screen-home-ingresado/screen-home-ingresado.component';
import { ScreenContactosInComponent } from './components/screens/screen-contactos-in/screen-contactos-in.component';
import { ScreenAcercaDeInComponent } from './components/screens/screen-acerca-de-in/screen-acerca-de-in.component';
import { ScreenPacienteComponent } from './components/screens/screen-paciente/screen-paciente.component';
import { ScreenHabitacionesComponent } from './components/screens/screen-habitaciones/screen-habitaciones.component';
import { FormularioPacienteComponent } from './components/component/formulario-paciente/formulario-paciente.component';
import { CollapsibleInComponent } from './components/component/collapsible-in/collapsible-in.component';
import { SectionComponent } from './components/component/section/section.component';

//----------------------------------------------------------------------
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
//-----------------------------------------------------------------------------------

import { ScreenPacienteParte2Component } from './components/screens/screen-paciente-parte2/screen-paciente-parte2.component';
import { ScreenHomeAdminComponent } from './components/screens/screen-home-admin/screen-home-admin.component';
import { CollapsibleInAdminComponent } from './components/component/collapsible-in-admin/collapsible-in-admin.component';
import { RegistroMedicComponent } from './components/component/registrar/registro-medic/registro-medic.component';
import { RegistroEnferComponent } from './components/component/registrar/registro-enfer/registro-enfer.component';
import { ScreenRegistrarMedComponent } from './components/screens/screen-registrar-med/screen-registrar-med.component';
import { ScreenRegistrarEnferComponent } from './components/screens/screen-registrar-enfer/screen-registrar-enfer.component';
import { ScreenHabitacionesLibresComponent } from './components/screens/screen-habitaciones-libres/screen-habitaciones-libres.component';
import { PacienteCardComponent } from './components/component/cards/paciente-card/paciente-card.component';
import { PacienteCardLibreComponent } from './components/component/cards/paciente-card-libre/paciente-card-libre.component';
import { ScreenHabitacionesAdminComponent } from './components/screens/screen-habitaciones-admin/screen-habitaciones-admin.component';
import { ScreenHabitacionesLibresAdminComponent } from './components/screens/screen-habitaciones-libres-admin/screen-habitaciones-libres-admin.component';
import { ScreenPacienteAdminComponent } from './components/screens/screen-paciente-admin/screen-paciente-admin.component';
import { ScreenContactosAdminComponent } from './components/screens/screen-contactos-admin/screen-contactos-admin.component';
import { ScreenAcercaDeAdminComponent } from './components/screens/screen-acerca-de-admin/screen-acerca-de-admin.component';
import { ScreenListaPacientesComponent } from './components/screens/screen-lista-pacientes/screen-lista-pacientes.component';
import { ScreenListaPacientesAdminComponent } from './components/screens/screen-lista-pacientes-admin/screen-lista-pacientes-admin.component';
import { ScreenInfoPacienteComponent } from './components/screens/screen-info-paciente/screen-info-paciente.component';
import { ScreenInfoPacienteAdminComponent } from './components/screens/screen-info-paciente-admin/screen-info-paciente-admin.component';
import { ListaPacienteComponent } from './components/component/lista-paciente/lista-paciente.component';
import { ScreenPacienteParte3AdminComponent } from './components/screens/screen-paciente-parte3-admin/screen-paciente-parte3-admin.component';
import { FormularioPaciente3Component } from './components/component/formulario-paciente3/formulario-paciente3.component';
import { PacienteCardFullComponent } from './components/component/cards/paciente-card-full/paciente-card-full.component';
import { PacienteCardNombreComponent } from './components/component/cards/paciente-card-nombre/paciente-card-nombre.component';


@NgModule({
  declarations: [
    AppComponent,
    ScreenInicioComponent,
    ScreenHomeComponent,
    NavbarHomeComponent,
    NavbarSesionIniciadaComponent,
    CuadroInicioSesionComponent,
    CuadroInicioSesionAdmComponent,
    ScreenContactosComponent,
    ScreenAcercaDeComponent,
    ScreenHomeIngresadoComponent,
    ScreenContactosInComponent,
    ScreenAcercaDeInComponent,
    ScreenPacienteComponent,
    ScreenHabitacionesComponent,
    FormularioPacienteComponent,
    CollapsibleInComponent,
    SectionComponent,
    ScreenPacienteParte2Component,
    ScreenHomeAdminComponent,
    CollapsibleInAdminComponent,
    RegistroMedicComponent,
    RegistroEnferComponent,
    ScreenRegistrarMedComponent,
    ScreenRegistrarEnferComponent,
    ScreenHabitacionesLibresComponent,
    PacienteCardComponent,
    PacienteCardLibreComponent,
    ScreenHabitacionesAdminComponent,
    ScreenHabitacionesLibresAdminComponent,
    ScreenPacienteAdminComponent,
    ScreenContactosAdminComponent,
    ScreenAcercaDeAdminComponent,
    ScreenListaPacientesComponent,
    ScreenListaPacientesAdminComponent,
    ScreenInfoPacienteComponent,
    ScreenInfoPacienteAdminComponent,
    ListaPacienteComponent,
    ScreenPacienteParte3AdminComponent,
    FormularioPaciente3Component,
    PacienteCardFullComponent,
    PacienteCardNombreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
