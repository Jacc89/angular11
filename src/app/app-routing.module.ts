import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscritoresComponent } from './components/escritores/escritores.component';
import { ListaEscritoresComponent } from './components/escritores/lista-escritores/lista-escritores.component';
import { ListaLibrosComponent } from './components/escritores/lista-libros/lista-libros.component';
import { AboutComponent } from './components/rutas/about/about.component';
import { ContacComponent } from './components/rutas/contac/contac.component';
import { CurrulumComponent } from './components/rutas/currulum/currulum.component';
import { DetallempleadoComponent } from './components/rutas/detallempleado/detallempleado.component';
import { ExperienciaComponent } from './components/rutas/experiencia/experiencia.component';
import { InfoComponent } from './components/rutas/info/info.component';
import { ProyectosComponent } from './components/rutas/proyectos/proyectos.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [

  //ejercicio de escritores
  { path: '', pathMatch: 'full', redirectTo: '/escritores'},
  { path: 'escritores', component: ListaEscritoresComponent},
  { path: 'escritores/:escritorId',  component: EscritoresComponent,  children:[
    { path:'libros', component: ListaLibrosComponent}
  ] },

  { path: '**',  redirectTo: '/escritores'  },

  // pruebas para las rutas...........
//   // importante el orden para a rutas ojo actrdarse
  
//   { path: '',  pathMatch:'full', redirectTo: 'about'  },  
//   { path: 'informacion', component: InfoComponent, canActivate:[RandomGuard]  },
//   { path: 'about', component: AboutComponent  },
//   { path: 'contacto', component: ContacComponent  },
//   //rutas con dependencia con hijos
//   { 
//     path: 'empleados/:empleadoId', component: DetallempleadoComponent,  children: [
//       { path: 'proyectos', component: ProyectosComponent },
//       { path: ' currulum', component: CurrulumComponent },
//       { path: 'experiencia', component: ExperienciaComponent },

//   ] },
//   { path: '**',  redirectTo: 'about'  },
// --------------------------------------------------------
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
