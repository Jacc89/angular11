import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-ejeservice',
  templateUrl: './ejeservice.component.html',
  styleUrls: ['./ejeservice.component.css']
})
export class EjeserviceComponent implements OnInit {


  arrPersonas: Persona[];

  constructor( private personaService: PersonasService) { }

  ngOnInit() {
    
   this.arrPersonas = this.personaService.getAll();
   
  }

  onClick(){
    this.personaService.create(new Persona('alejo','mora',40, true))
  }

  async onClickActivas(){
    // elemplo then y catch
    // this.personaService.activos()
    // .then(arrTemPersonas=>console.log(arrTemPersonas))
    // .catch(error=>console.log(error));

    // ejemplo con await y asyng
    try{
      this.arrPersonas = await this.personaService.activosV2();
    }catch(error){
      console.log(error);
    }
    
    
  }

}
