import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado:string;
  calculofinal:boolean=false;

  constructor() {
    this.resultado='';
   }

  ngOnInit() {
  }
/// evento de click en html $evento
  // onClick($event){
  //   // console.log($event.target.innerText);
  //   if(this.calculofinal){
  //     this.resultado=this.resultado +  $event.target.innerText;
  //     this.calculofinal=false;

  //   }else{
  //     this.resultado=this.resultado +  $event.target.innerText;
  //   }
    
  // }


  // evento con parametros establesidos
  onClick(pValue){
    if(this.calculofinal){
          this.resultado=pValue;
          this.calculofinal=false;
    
        }else{
          this.resultado += pValue;
        }

  }

  onResultado(){
    this.resultado=eval(this.resultado);
    this.calculofinal=true;
  }

}
