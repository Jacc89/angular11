import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  mensaje:string;
  identifiParrafo : string ;
  otroparrfo:string;

  constructor() { 
    this.mensaje= 'un saludo a todos';
    this.identifiParrafo='parrafo principal';
    this.otroparrfo= 'textooooo';


    setTimeout(()=>{
      this.mensaje='este es otro mensaje';
      this.identifiParrafo='parrafo loco';
      this.otroparrfo='angular';
    },3000);
  }

  ngOnInit() {
  }

  mostrarSaludo():string{
    return'saludo de metodo'
  }

}
