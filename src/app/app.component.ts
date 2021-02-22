import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular11';

  titulos:string[];
  numeros:number[];
  campoTexto: string;
  persona:any;

  //tareas
  arrTareas: Tarea[];
  
//texto main
mainTexto:string;

  constructor(){
    this.titulos=['elo', 'jumanji', 'leo']
    this.numeros =[45,2,7,5];
    this.campoTexto='valor variable';
    this.persona={};
    this.arrTareas=[];
    this.mainTexto="texto desde el padre";
this.mainTexto="";

  }

  ngOnInit(){
    let cont =0;
    setInterval(()=>{
      this.mainTexto =`Texto ${cont++}`;
    }, 2000);
  }

  onAlertapulsada($event){
    console.log('alertapulsada!!!!!');
  }

  onTerminaCronometro($event){
    console.log( $event);
  }
  onClick1(){
    this.campoTexto='vslor desfde boton';
  }

  onTareaCreada($event){
    
    this.arrTareas.push($event);
    console.log(this.arrTareas);

  }
  

  

}
