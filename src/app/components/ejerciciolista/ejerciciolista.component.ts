import { Component, OnInit } from '@angular/core';
import { listaProducto } from 'src/app/models/ejerciciolista.model';

@Component({
  selector: 'app-ejerciciolista',
  templateUrl: './ejerciciolista.component.html',
  styleUrls: ['./ejerciciolista.component.css']
})
export class EjerciciolistaComponent implements OnInit {
  productosSelecionados: listaProducto[];
  productosComprados: listaProducto[];


  constructor() { 
    this.productosSelecionados = [];
    this.productosComprados = [];
  }

  ngOnInit() {
  }

  onProductoCreado($event){
    console.log($event);
    this.productosSelecionados.push($event);
  }

  onProductoSelecionado($event){
    console.log($event);
    const prod = this.productosSelecionados.splice($event, 1);
    this.productosComprados.push(prod[0]);
  }

  onNoProductoSelecionado($event){
    const prod = this.productosComprados.splice($event, 1);
    this.productosSelecionados.push(prod[0]);
  }

}
