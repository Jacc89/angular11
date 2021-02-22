import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from 'src/app/models/tarea.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Output() tareaCreada: EventEmitter<Tarea>;
  nuevaTarea: Tarea;

  constructor() {
    this.nuevaTarea=new Tarea();
    this.tareaCreada =new EventEmitter();
   }

  ngOnInit() {
  }

  onClick(){
    // console.log('pulsado');
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea= new Tarea();
  }

}
