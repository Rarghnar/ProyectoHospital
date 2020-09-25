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
import { BackgroundInicioComponent } from './components/backgrouds/background-inicio/background-inicio.component';
import { ScreenContactosComponent } from './components/screens/screen-contactos/screen-contactos.component';
import { NavbarContactosComponent } from './components/navbar/navbar-contactos/navbar-contactos.component';
import { ScreenAcercaDeComponent } from './components/screens/screen-acerca-de/screen-acerca-de.component';
import { NavbarSesionContactosComponent } from './components/navbar/navbar-sesion-contactos/navbar-sesion-contactos.component';
import { NavbarSesionAcercaDeComponent } from './components/navbar/navbar-sesion-acerca-de/navbar-sesion-acerca-de.component';
import { ScreenHomeIngresadoComponent } from './components/screens/screen-home-ingresado/screen-home-ingresado.component';
import { ScreenContactosInComponent } from './components/screens/screen-contactos-in/screen-contactos-in.component';
import { ScreenAcercaDeInComponent } from './components/screens/screen-acerca-de-in/screen-acerca-de-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenInicioComponent,
    ScreenHomeComponent,
    NavbarHomeComponent,
    NavbarSesionIniciadaComponent,
    CuadroInicioSesionComponent,
    CuadroInicioSesionAdmComponent,
    BackgroundInicioComponent,
    ScreenContactosComponent,
    NavbarContactosComponent,
    ScreenAcercaDeComponent,
    NavbarSesionContactosComponent,
    NavbarSesionAcercaDeComponent,
    ScreenHomeIngresadoComponent,
    ScreenContactosInComponent,
    ScreenAcercaDeInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
