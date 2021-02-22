import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

@Input() tareas: Tarea[];
  constructor() { }

  ngOnInit() {
  }

  mostrarTareas(){
    let resul= '<ul>';
    for(let tarea of this.tareas){
      resul+=`<li> ${tarea.titulo} - ${tarea.descripcion}</li>`
    }
     resul+='</ul>';
     return resul;
  }

}
