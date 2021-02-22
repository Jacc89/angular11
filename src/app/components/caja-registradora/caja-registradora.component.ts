import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';

@Component({
  selector: 'app-caja-registradora',
  templateUrl: './caja-registradora.component.html',
  styleUrls: ['./caja-registradora.component.css']
})
export class CajaRegistradoraComponent implements OnInit {

  arrComida:Producto[];
  arrBebida:Producto[];

  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados=[];
    this.arrBebida =[
      new Producto('aguila', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdam.cocinafacil.com.mx%2Fwp-content%2Fuploads%2F2020%2F04%2Fcomida-china-tipica.jpg&imgrefurl=https%3A%2F%2Fwww.cocinafacil.com.mx%2Ftips-de-cocina%2Fcomida-china-tipica%2F&tbnid=opw94-ABhAH6fM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ..i&docid=742VkjJ1gQ_IZM&w=1000&h=560&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ', 40.000),
      new Producto('agua', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsevilla.abc.es%2Fgurme%2Fwp-content%2Fuploads%2Fsites%2F24%2F2012%2F01%2Fcomida-rapida-casera.jpg&imgrefurl=https%3A%2F%2Fsevilla.abc.es%2Fgurme%2Flas-mejores-recetas%2Fdiez-platos-de-comida-rapida-casera%2F&tbnid=z_g5Ox6IKVvAEM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygDegUIARDhAQ..i&docid=BJyYUXDrYJmNvM&w=1920&h=1080&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygDegUIARDhAQ', 30.000),
      new Producto('sopa', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ecestaticos.com%2Fimage%2Fclipping%2F1eda44daf5f75ca868b7eb9bf93396e4%2Fpor-que-el-desayuno-es-la-comida-mas-importante-si-quieres-estar-delgado.jpg&imgrefurl=https%3A%2F%2Fwww.elconfidencial.com%2Falma-corazon-vida%2F2017-07-20%2Fdesayuno-comida-mas-importante-del-dia-estar-delgado_1417602%2F&tbnid=QPRakaxWqoQdtM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygHegUIARDqAQ..i&docid=VqHFpaOPpyKWqM&w=1600&h=900&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygHegUIARDqAQ', 45.000),
      new Producto('papa', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdam.cocinafacil.com.mx%2Fwp-content%2Fuploads%2F2020%2F04%2Fcomida-china-tipica.jpg&imgrefurl=https%3A%2F%2Fwww.cocinafacil.com.mx%2Ftips-de-cocina%2Fcomida-china-tipica%2F&tbnid=opw94-ABhAH6fM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ..i&docid=742VkjJ1gQ_IZM&w=1000&h=560&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ', 20000),
    ];
    this.arrComida=[
      new Producto('cocido', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdam.cocinafacil.com.mx%2Fwp-content%2Fuploads%2F2020%2F04%2Fcomida-china-tipica.jpg&imgrefurl=https%3A%2F%2Fwww.cocinafacil.com.mx%2Ftips-de-cocina%2Fcomida-china-tipica%2F&tbnid=opw94-ABhAH6fM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ..i&docid=742VkjJ1gQ_IZM&w=1000&h=560&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ', 40.000),
      new Producto('te', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsevilla.abc.es%2Fgurme%2Fwp-content%2Fuploads%2Fsites%2F24%2F2012%2F01%2Fcomida-rapida-casera.jpg&imgrefurl=https%3A%2F%2Fsevilla.abc.es%2Fgurme%2Flas-mejores-recetas%2Fdiez-platos-de-comida-rapida-casera%2F&tbnid=z_g5Ox6IKVvAEM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygDegUIARDhAQ..i&docid=BJyYUXDrYJmNvM&w=1920&h=1080&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygDegUIARDhAQ', 30.000),
      new Producto('arroz', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ecestaticos.com%2Fimage%2Fclipping%2F1eda44daf5f75ca868b7eb9bf93396e4%2Fpor-que-el-desayuno-es-la-comida-mas-importante-si-quieres-estar-delgado.jpg&imgrefurl=https%3A%2F%2Fwww.elconfidencial.com%2Falma-corazon-vida%2F2017-07-20%2Fdesayuno-comida-mas-importante-del-dia-estar-delgado_1417602%2F&tbnid=QPRakaxWqoQdtM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygHegUIARDqAQ..i&docid=VqHFpaOPpyKWqM&w=1600&h=900&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygHegUIARDqAQ', 45.000),
      new Producto('refresco', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdam.cocinafacil.com.mx%2Fwp-content%2Fuploads%2F2020%2F04%2Fcomida-china-tipica.jpg&imgrefurl=https%3A%2F%2Fwww.cocinafacil.com.mx%2Ftips-de-cocina%2Fcomida-china-tipica%2F&tbnid=opw94-ABhAH6fM&vet=12ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ..i&docid=742VkjJ1gQ_IZM&w=1000&h=560&q=imagenes%20comida%7D&ved=2ahUKEwib9NCJlPHuAhWDr1kKHU3oBT4QMygBegUIARDcAQ', 20.000),
    ];
   }

  ngOnInit() {
  }

  onProductoSelecionado($event){
    // console.log($event);
    // this.productosSeleccionados.push($event);

     const repetido =this.productosSeleccionados.find(producto =>producto.nombre === $event.nombre);
    
     if (repetido){
       repetido.cantidad++;
     }else{
       $event.cantidad = 1;
      this.productosSeleccionados.push($event);
     }
     console.log(this.productosSeleccionados);
  }

}
