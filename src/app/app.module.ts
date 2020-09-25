import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './components/component/component.component';
import { ScreenInicioComponent } from './components/screens/screen-inicio/screen-inicio.component';
import { ScreenHomeComponent } from './components/screens/screen-home/screen-home.component';
import { NavbarHomeComponent } from './components/navbar/navbar-home/navbar-home.component';
import { NavbarSesionIniciadaComponent } from './components/navbar/navbar-sesion-iniciada/navbar-sesion-iniciada.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ScreenInicioComponent,
    ScreenHomeComponent,
    NavbarHomeComponent,
    NavbarSesionIniciadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
