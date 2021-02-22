import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritores.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-escritores',
  templateUrl: './escritores.component.html',
  styleUrls: ['./escritores.component.css']
})
export class EscritoresComponent implements OnInit {

  escritor: Escritor;

  constructor(
    private activateRoute: ActivatedRoute, 
    private escritoresService: EscritoresService
  ) { }

   ngOnInit() {
    this.activateRoute.params.subscribe(async params =>{
      console.log(params.escritorId);
      this.escritor = await this.escritoresService.getById(parseInt(params.escritorId));
      console.log(this.escritor);
    });
  }

}
