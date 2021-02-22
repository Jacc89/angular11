import { Injectable } from '@angular/core';
import { promise } from 'protractor';

import { LIBROS  } from "../db/libros.db";
import { Libro } from '../models/libros.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

    getByEscritor(escritorId): Promise<Libro[]>{
    return new Promise((resolve, reject) => {
      const arrFiltrado = LIBROS.filter(Libro =>{
        return Libro.escritor === escritorId;
      });
      resolve(arrFiltrado);
    });

    }

}
