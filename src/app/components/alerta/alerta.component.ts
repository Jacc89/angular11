import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
 @Input('text') mensaje:string;
 @Input() subtitulo:string;

 @Output() alertapulsada: EventEmitter<string>;


  constructor() { 
    this.mensaje='mensaje de alerta por defecto';
    this.subtitulo='mensaje de subtitulo por defecto';

    this.alertapulsada= new EventEmitter();
  
  }

  ngOnInit():void {
    console.log(this.mensaje);
  }

  onClick(){
    this.alertapulsada.emit('la alerta ha sid pulsad');

  }

}
