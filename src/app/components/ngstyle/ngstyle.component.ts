import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  propiedadParrafo:any;

  constructor() {
    this.propiedadParrafo={
      color:'blue', 
      fontSize:'24px'
    }
   }

  ngOnInit() {
  }
  cambiarColor(pColor:string){
    switch(pColor){
      case 'a':
        this.propiedadParrafo.color='yellow';
        break;
        case 'r':
        this.propiedadParrafo.color='red';
        break;
        case 'v':
        this.propiedadParrafo.color='green';
        break;
    }
  }

  onChanges($event){
    console.log('Entra');
    this.propiedadParrafo.fontSize=`${$event.target.value}px`;
  }

}
