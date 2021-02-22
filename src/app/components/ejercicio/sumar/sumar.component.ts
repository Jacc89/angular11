import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

 @Input() num1:string;
 @Input() num2:string;

  resultado:number;

  // num1:number;
  // num2:number;
  // resultado:number;

  constructor() { 
    // this.num1=4;
    // this.num2=8;
    this.resultado= 0;
   }

  ngOnInit() {
  }

  onClick(){
    // this.resultado= this.num1 + this.num2;
    this.resultado= parseInt(this.num1) + parseInt(this.num2);
    console.log(this.resultado);

  }

}
