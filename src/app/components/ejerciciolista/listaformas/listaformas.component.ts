import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { listaProducto } from 'src/app/models/ejerciciolista.model';

@Component({
  selector: 'app-listaformas',
  templateUrl: './listaformas.component.html',
  styleUrls: ['./listaformas.component.css']
})
export class ListaformasComponent implements OnInit {
  
  @Input() productos:listaProducto[];

  @Input() textBoton: string;

  @Output()  productoSeleccionado: EventEmitter<number>;

    constructor() {

     this.productoSeleccionado= new EventEmitter();
   }

  ngOnInit() {
  }

  onClick(indice){
    this.productoSeleccionado.emit(indice);
    
  }

}
