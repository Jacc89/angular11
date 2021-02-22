import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswich',
  templateUrl: './ngswich.component.html',
  styleUrls: ['./ngswich.component.css']
})
export class NgswichComponent implements OnInit {

  opcionNumero: number;
  opcionString: string;

  constructor() {
    this.opcionNumero = 8;
    this.opcionString = 'uno';
   }

  ngOnInit() {
  }


}
