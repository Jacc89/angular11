import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  mostrar:boolean;

  constructor() {
    this.mostrar = true;
   }

  ngOnInit() {
  }

  onClickMostrar(){
    this.mostrar=!this.mostrar
  }

}
