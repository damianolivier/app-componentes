import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NextstepsComponent } from './body/nextsteps/nextsteps.component';
import { ListadoclientesComponent } from './body/listadoclientes/listadoclientes.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { SucursalesComponent } from './abm/sucursales/sucursales.component';
import { VentassucursalesComponent } from './ventassucursales/ventassucursales.component';
import { ClientesComponent } from './abm/clientes/clientes.component';

import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NextstepsComponent,
    ListadoclientesComponent,
    ListadosucursalesComponent,
    SucursalesComponent,
    VentassucursalesComponent,
    ClientesComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
