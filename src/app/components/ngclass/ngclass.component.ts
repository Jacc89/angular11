import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  cadenaClases:string;
  arrayClases: string[];
  colorSeleccionado:string;
  constructor() { 
    this.cadenaClases= ' semaforo rojo';
    this.arrayClases=['semaforo'];
    this.arrayClases.push('rojo');
    this.arrayClases.push('redondo');
    this.colorSeleccionado='r';
  }

  ngOnInit() {
    setInterval(()=>{
      if (this.colorSeleccionado === 'r') {
        this.colorSeleccionado = 'a';
        
      } else if(this.colorSeleccionado === 'a'){
        this.colorSeleccionado = 'v'
        
      }else if(this.colorSeleccionado === 'v'){
        this.colorSeleccionado = 'r'
      }
    }, 1000);
  }

}
