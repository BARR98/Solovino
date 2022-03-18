import { Component, OnInit } from '@angular/core';
import { AdopcionService } from 'src/app/core/Services/Adopcion/adopcion.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-adopciones-admin',
  templateUrl: './adopciones-admin.component.html',
  styleUrls: ['./adopciones-admin.component.css']
})
export class AdopcionesAdminComponent implements OnInit {

  adopcion: any;
  _id: String = "";
  wantCreate: Boolean = false;
  form!: FormGroup;

  constructor(
    public adopcionService: AdopcionService,
    public router: Router,
    public formBuilder: FormBuilder

  ) { 
    this.BuildForm()
  }

  ngOnInit(): void {
    this.adopcionService.getAllAdopciones()
    .subscribe(geteadAdopciones => {
      this.adopcion = geteadAdopciones
      console.log(this.adopcion)
      

    });
  }

  private BuildForm() {
    this.form = this.formBuilder.group({

      nombre_mascota: ['',
        [Validators.minLength(4)]],
      edad_mascota: ['',
        [Validators.minLength(4)]],
      aclaraciones: ['',
        [Validators.minLength(5)]],
      sexo_mascota: ['',
        [Validators.minLength(1)]],
      esterilizacion: ['',
        [Validators.minLength(1)]],
      raza: ['',
        [Validators.minLength(1)]],
      imagen_mascota: ['']






    })
  }

  redirectToViewEspecificPost(_id: string){
    this.router.navigate(['admin/view-post',[ _id]])
    
  }

  WantCreate(){
    this.wantCreate = true;
  }

  SaveNewAdopcion(){
    const adopcion = this.form.value
    this.adopcionService.createAdopcion(adopcion)
    .subscribe(newAdopcion => {
      console.log(newAdopcion)
    })
  }

}
