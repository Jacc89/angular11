import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libros.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  libros: Libro[];

  constructor(
    private libroService:LibrosService,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.parent.params.subscribe(async params => {
      this.libros = await this.libroService.getByEscritor(parseInt( params.escritorId));
    })

  }

}
