import { Component, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  
  arrTareas:ToDoModel[];

  constructor() {
    this.arrTareas=[];
   }

  ngOnInit() {
  }

  onTareaCreada($event){
    console.log($event);
    this.arrTareas.push($event);
  }

}
