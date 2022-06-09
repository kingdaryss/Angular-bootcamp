import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InputComponent } from './input/input.component';
import { AppRoutingModule } from './app-routing.module';
import { NovaPaginaComponent } from './nova-pagina/nova-pagina.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FormularioComponent,
    InputComponent,
    NovaPaginaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule.routing,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
