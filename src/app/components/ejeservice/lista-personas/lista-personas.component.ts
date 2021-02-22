import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  arrPersonas: Persona[];

  constructor(private personaService: PersonasService) { }

  ngOnInit() {
    this.arrPersonas=this.personaService.getAll();
  }

}
