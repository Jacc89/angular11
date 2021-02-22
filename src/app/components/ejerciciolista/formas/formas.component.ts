import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { listaProducto } from 'src/app/models/ejerciciolista.model';

@Component({
  selector: 'app-formas',
  templateUrl: './formas.component.html',
  styleUrls: ['./formas.component.css']
})
export class FormasComponent implements OnInit {

  @Output() productoCreado: EventEmitter<listaProducto>;
  nuevoProducto: listaProducto;

  constructor() {
    this.nuevoProducto = new listaProducto();
    this.productoCreado= new EventEmitter();
   }

  ngOnInit() {
  }

  onClick(){
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto =new listaProducto();

  }

}
