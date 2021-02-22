import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  mensaje:string;

  constructor() {
    this.mensaje='Este es un mensaje inicial';
   }

  ngOnInit() {

  }

  onClick($event){
    console.log('se ha pulsado ');
    console.log($event);
  }

  onChange($event){
    console.log($event.target.value);

  }

  onMouseEnter(){
    console.log('entro al div');
    this.mensaje='estoy dentro del div';

  }

  onMouseOut(){
    this.mensaje='estoy saliendo del div';

  }

  onChangeInput($event){
    console.log($event.target.value);
  }
  onInput($event){
    console.log($event.target.value);
    this.mensaje = $event.target.value;

  }
  onFocus(){
    console.log('Recibe el foco');
  }


  onBlur(){
    console.log('Pierde el foco');

  }

}
