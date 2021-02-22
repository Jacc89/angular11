import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';


@Component({ 
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  contador:number;

  @Input() inicio:number;

  @Output() terminaCronometro: EventEmitter<string>;

  constructor() {
    this.contador=this.inicio ? this.inicio:10;
    this.terminaCronometro = new EventEmitter();
   }

  ngOnInit() {
    

  }

  onClick($event){
    console.log("pulsa");
    let interval= setInterval(()=>{
      this.contador--;
     if (this.contador < 0) {
       clearInterval(interval);
       this.contador =this.inicio;
       this.terminaCronometro.emit('finaliza el cronometro del numero ' + this.inicio);
       
     }
   },   1000);
  
  }

}
