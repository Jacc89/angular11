import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() texto:string;

  constructor() { 
    console.log('********Estoy en el contructor main******');
    console.log('inicializa propiedades');
    console.log(`textoO= ${this.texto}`);

  }
  ngOnChanges(changes: SimpleChange){
    console.log('********Estoy en el ngOnChange******');
    console.log(`'textoO= ${this.texto}`);
    console.log(`valor anterior: ${changes['texto'].previousValue}. valor ACTUAL ${changes['texto'].currentValue}`);
  }
 

  ngOnInit() {
    console.log('********Estoy en el ngonInit mail******');
    console.log('se usa para lanzar las acciones que arrancan  el componente');
        console.log(`'textoO=',${this.texto}`);
  }
  
  ngAfterViewInit() {
    console.log('********Estoy en el ngAfterViewInit main******');
    console.log('se usa para lanzar las acciones iniciales dentro de la plantilla');
  }

}
