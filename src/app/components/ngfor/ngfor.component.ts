import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  personas: any[];

  constructor() { 
    this.personas= [
      {nombre: 'Mario', apellidos:'castro', edad: 55},
      {nombre: 'loe', apellidos:'castro', edad: 16},
      {nombre: 'mery', apellidos:'castro', edad: 36},
      {nombre: 'luis', apellidos:'castro', edad: 23},
      {nombre: 'leo', apellidos:'castro', edad: 47}
    ]
  }

  ngOnInit() {
  }

  onClick(){
    this.personas.push({
      nombre: 'lina', apellidos:'parga', edad: 27
    })
  }

}
