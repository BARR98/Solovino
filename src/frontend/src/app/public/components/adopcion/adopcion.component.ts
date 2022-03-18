import { Component, OnInit } from '@angular/core';
import { AdopcionService } from 'src/app/core/Services/Adopcion/adopcion.service';
import { RequisitosAdopcionService } from 'src/app/core/Services/RequisitosAdopcion/requisitos-adopcion.service';
@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent implements OnInit {

  adopciones: any;
  requisitos_adopcion: any;
  requisitos: any;
  constructor(
    public adopcionService:AdopcionService,
    public requisitosAdopcion: RequisitosAdopcionService
    ) { }

  ngOnInit(): void {
    this.adopcionService.getAllAdopciones()
    .subscribe(getedAdopcion => {
      this.adopciones = getedAdopcion
      console.log(this.adopciones)
    });

    this.requisitosAdopcion.getAllRequisitos()
    .subscribe(getedRequisitosAdopcion => {
      this.requisitos_adopcion = getedRequisitosAdopcion
      console.log(this.requisitos_adopcion)
      this.requisitos = this.requisitos_adopcion[0]["requisitos"]
      console.log(this.requisitos_adopcion[0]["requisitos"])
    });
  }

}
