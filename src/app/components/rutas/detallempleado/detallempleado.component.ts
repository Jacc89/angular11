import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallempleado',
  templateUrl: './detallempleado.component.html',
  styleUrls: ['./detallempleado.component.css']
})
export class DetallempleadoComponent implements OnInit {

  empleadoId = Number;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params =>{
      console.log(params);
      this.empleadoId = params.empleadoId;
    });
  }

}
