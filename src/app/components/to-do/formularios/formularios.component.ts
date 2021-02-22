import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoModel } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  @Output() tareaCreada: EventEmitter<ToDoModel>
  nuevatarea: ToDoModel;

  constructor() {
    this.nuevatarea= new ToDoModel();
  this.tareaCreada = new EventEmitter();
  } 

  ngOnInit() {
  }

  onClick(){
    this.tareaCreada.emit(this.nuevatarea);
    this.nuevatarea =new ToDoModel();

  }

}
