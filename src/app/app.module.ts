//directivas modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

//rutas
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { PadreComponent } from './components/padre/padre.component';
import { Hijo1Component } from './components/hijo1/hijo1.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { SumarComponent } from './components/ejercicio/sumar/sumar.component';
import { CronometroComponent } from './components/ejercicio/cronometro/cronometro.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AlertaComponent } from './components/alerta/alerta.component';
import { FormsComponent } from './components/forms/forms.component';
import { ListaComponent } from './components/forms/lista/lista.component';
import { MainComponent } from './components/main/main.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgswichComponent } from './components/ngswich/ngswich.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ListComponent } from './components/to-do/list/list.component';
import { FormulariosComponent } from './components/to-do/formularios/formularios.component';
import { ListaProductosComponent } from './components/caja-registradora/lista-productos/lista-productos.component';
import { CajaRegistradoraComponent } from './components/caja-registradora/caja-registradora.component';
import { ComandaComponent } from './components/caja-registradora/comanda/comanda.component';
import { SubrayadoDirective } from './Directivas/subrayado.directive';
import { EjerciciolistaComponent } from './components/ejerciciolista/ejerciciolista.component';
import { FormasComponent } from './components/ejerciciolista/formas/formas.component';
import { ListaformasComponent } from './components/ejerciciolista/listaformas/listaformas.component';
import { InfoComponent } from './components/rutas/info/info.component';
import { AboutComponent } from './components/rutas/about/about.component';
import { ContacComponent } from './components/rutas/contac/contac.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { DetallempleadoComponent } from './components/rutas/detallempleado/detallempleado.component';
import { ProyectosComponent } from './components/rutas/proyectos/proyectos.component';
import { CurrulumComponent } from './components/rutas/currulum/currulum.component';
import { ExperienciaComponent } from './components/rutas/experiencia/experiencia.component';
import { EjeserviceComponent } from './components/ejeservice/ejeservice.component';
import { ListaPersonasComponent } from './components/ejeservice/lista-personas/lista-personas.component';
import { EscritoresComponent } from './components/escritores/escritores.component';
import { ListaEscritoresComponent } from './components/escritores/lista-escritores/lista-escritores.component';
import { ListaLibrosComponent } from './components/escritores/lista-libros/lista-libros.component';



@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    SumarComponent,
    CronometroComponent,
    CalculadoraComponent,
    AlertaComponent,
    FormsComponent,
    ListaComponent,
    MainComponent,
    NgstyleComponent,
    NgclassComponent,
    NgifComponent,
    NgforComponent,
    NgswichComponent,
    ToDoComponent,
    ListComponent,
    FormulariosComponent,  
    ListaProductosComponent,
    CajaRegistradoraComponent,
    ComandaComponent,
    SubrayadoDirective,
    EjerciciolistaComponent,
    FormasComponent,
    ListaformasComponent,
    InfoComponent,
    AboutComponent,
    ContacComponent,
    RutasComponent,
    DetallempleadoComponent,
    ProyectosComponent,
    CurrulumComponent,
    ExperienciaComponent,
    EjeserviceComponent,
    ListaPersonasComponent,
    EscritoresComponent,
    ListaEscritoresComponent,
    ListaLibrosComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
