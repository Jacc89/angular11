import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritores.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoreService: EscritoresService) { }

  async ngOnInit() {
    // this.arrEscritores = this.escritoreService.getAll();
    // console.log(escritores);
    // this.escritoreService.getAllPromise()
    // .then(escritores=>{
    //   this.arrEscritores = escritores
    // })
    this.arrEscritores = await this.escritoreService.getAllPromise();

  }


  async onChange($event){
    console.log($event.target.value);
    if ($event.target.value === 'todos') {
      this.arrEscritores = await this.escritoreService.getAllPromise();
    } else {
      this.arrEscritores = await this.escritoreService.getByPais($event.target.value);
    }
    

  };



}
