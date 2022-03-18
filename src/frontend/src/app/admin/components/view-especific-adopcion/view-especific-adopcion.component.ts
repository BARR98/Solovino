import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { AdopcionService } from 'src/app/core/Services/Adopcion/adopcion.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-view-especific-adopcion',
  templateUrl: './view-especific-adopcion.component.html',
  styleUrls: ['./view-especific-adopcion.component.css']
})
export class ViewEspecificAdopcionComponent implements OnInit {

  _id: any;
  adopcion: any;
  wantEdit: Boolean = false;
  form!: FormGroup;

  constructor(
    public adopcionService: AdopcionService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public formBuilder: FormBuilder
  ) {
    this.BuildForm()
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this._id = this.activatedRoute.snapshot.paramMap.get('id')
      console.log(this._id)
      this.adopcionService.getAdopcion(this._id)
        .subscribe(getedPost => {
          this.adopcion = getedPost
          console.log(getedPost)

        });
    });
  }

  private BuildForm() {
    this.form = this.formBuilder.group({

      nombre_mascota: ['',
        [Validators.minLength(4)]],
      edad_mascota: ['',
        [Validators.minLength(1)]],
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



  WantEdit() {
    this.wantEdit = true;
    console.log(this.wantEdit)

  }

  saveAdopcionUpdated() {
    if (this.form.valid) {

      const adopcionUpdated = this.form.value;
      console.log(adopcionUpdated)
      this.adopcionService.updateAdopcion(this._id, adopcionUpdated)
        .subscribe((newPost) => {
          console.log(newPost);
          this.adopcion = this.adopcionService.getAdopcion(this._id)
        });
    }

  }

  deleteAdopcion() {
    if (confirm('¿Deseas eliminar este elemento?')) {
      console.log(this._id)
      this.adopcionService.deleteAdopcion(this._id)
      .subscribe(rta => {
          this.router.navigate(['/admin/adopciones'])
      });
    }

  }

}
