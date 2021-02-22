import { Component, Input, OnInit, Output,  EventEmitter  } from '@angular/core';

import { Producto } from 'src/app/models/productos.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos:Producto[];

  @Output() productoSelecionado:EventEmitter<Producto>;

  constructor() {
    this.productoSelecionado= new EventEmitter();
   }

  ngOnInit() {
  }

  onClick(pProducto){
    console.log(pProducto);
    this.productoSelecionado.emit(pProducto);

    
  }

}
