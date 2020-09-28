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
import { NavbarContactosComponent } from './components/navbar/navbar-contactos/navbar-contactos.component';
import { ScreenAcercaDeComponent } from './components/screens/screen-acerca-de/screen-acerca-de.component';
import { NavbarSesionContactosComponent } from './components/navbar/navbar-sesion-contactos/navbar-sesion-contactos.component';
import { NavbarSesionAcercaDeComponent } from './components/navbar/navbar-sesion-acerca-de/navbar-sesion-acerca-de.component';
import { ScreenHomeIngresadoComponent } from './components/screens/screen-home-ingresado/screen-home-ingresado.component';
import { ScreenContactosInComponent } from './components/screens/screen-contactos-in/screen-contactos-in.component';
import { ScreenAcercaDeInComponent } from './components/screens/screen-acerca-de-in/screen-acerca-de-in.component';
import { ScreenPacienteComponent } from './components/screens/screen-paciente/screen-paciente.component';
import { ScreenHabitacionesComponent } from './components/screens/screen-habitaciones/screen-habitaciones.component';
import { ScreenAgregarMedicoComponent } from './components/screens/screen-agregar-medico/screen-agregar-medico.component';
import { FormularioPacienteComponent } from './components/component/formulario-paciente/formulario-paciente.component';
import { CollapsibleInComponent } from './components/component/collapsible-in/collapsible-in.component';
import { SectionComponent } from './components/component/section/section.component';
import { NavbarAcercaDeComponent } from './components/navbar/navbar-acerca-de/navbar-acerca-de.component';
//----------------------------------------------------------------------
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
//-----------------------------------------------------------------------------------

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
    NavbarContactosComponent,
    ScreenAcercaDeComponent,
    NavbarSesionContactosComponent,
    NavbarSesionAcercaDeComponent,
    ScreenHomeIngresadoComponent,
    ScreenContactosInComponent,
    ScreenAcercaDeInComponent,
    ScreenPacienteComponent,
    ScreenHabitacionesComponent,
    ScreenAgregarMedicoComponent,
    FormularioPacienteComponent,
    CollapsibleInComponent,
    SectionComponent,
    NavbarAcercaDeComponent,    
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
