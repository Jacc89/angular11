import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[];

  constructor() { 
    this.personas= [
      new Persona('alexa','castro',32,true),
      new Persona('jenny','clavijo',30,false),
      new Persona('luz','castro',18,true),
      new Persona('tatoo','forero',20,false),

    ];
  }

  getAll(){
    return this.personas;
  }

  create(personaNueva: Persona){
    this.personas.push(personaNueva);
  }

  activos():Promise<Persona[]>{
    const prom = new Promise<Persona[]>((resolve, reject) => {
      const  arrTemp: Persona[] =[];
      for(let persona of this.personas){
        if(persona.activo){
          arrTemp.push(persona);
        }
      }
      resolve(arrTemp);
    });
    return prom;
  }

  activosV2():Promise<Persona[]>{
    return new Promise<Persona[]>((resolve, reject) => {
      // modo largo
      // const arrTemp= this.personas.filter(persona=>{
      //   return persona.activo
      // });
      // resolve(arrTemp);
// modo cordo hace lo mismo en el resolve
      resolve(this.personas.filter(persona=>persona.activo));
    });
  }
}
