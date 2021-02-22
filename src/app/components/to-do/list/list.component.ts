import { Component, Input, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tareas: ToDoModel[];

  constructor() { }

  ngOnInit() {
  }

  onClick(pTarea:ToDoModel){
    pTarea.completa = !pTarea.completa;

  }

  onClickBorrar(indice){
    this.tareas.splice(indice,1);

  }

}
