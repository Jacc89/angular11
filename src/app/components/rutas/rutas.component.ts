import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  constructor( private router:Router) {

   }

  ngOnInit() {
  }
  onClick(pRuta: string){
    //tareas previas
    console.log('se relaiza la rutas');
    this.router.navigate([pRuta]);

  }

}
