import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { PostsService } from 'src/app/core/Services/Posts/posts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-post-especifico',
  templateUrl: './ver-post-especifico.component.html',
  styleUrls: ['./ver-post-especifico.component.css']
})

export class VerPostEspecificoComponent implements OnInit {

  _id: any;
  post: any;
  wantEdit: Boolean = false;
  form!: FormGroup;

  constructor(
    public postService: PostsService,
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
      this.postService.getPost(this._id)
        .subscribe(getedPost => {
          this.post = getedPost
          console.log(getedPost)

        });
    });
  }

  private BuildForm() {
    this.form = this.formBuilder.group({
      nombre_dueño: ['',
        [Validators.minLength(4)]],
      nombre_mascota: ['',
        [Validators.minLength(4)]],
      descripcion_mascota: ['',
        [Validators.minLength(4)]],
      edad_mascota: ['',
        [Validators.minLength(1)]],
      imagen_mascota: [''],
      sexo_mascota: ['',
      Validators.minLength(1)],
      talla_mascota: ['',
      Validators.minLength(1)],
      raza_mascota: ['',
      Validators.minLength(4)],
      fecha_desaparicion: ['',
        [Validators.minLength(4)]],
      lugar_desaparicion: ['',
        [Validators.minLength(4)]],
      telefono: ['',
        [Validators.minLength(8),
        Validators.maxLength(9)]],






    })
  }



  WantEdit() {
    this.wantEdit = true;
    console.log(this.wantEdit)

  }

  savePostUpdated() {
    if (this.form.valid) {

      const postUpdated = this.form.value;
      console.log(postUpdated)
      this.postService.updatePost(this._id, postUpdated)
        .subscribe((newPost) => {
          console.log(newPost);
          this.post = this.postService.getPost(this._id)
        });
    }

  }

  deletePost() {
    if (confirm('¿Deseas eliminar este elemento?')) {
      console.log(this._id)
      this.postService.deletePost(this._id)
      .subscribe(rta => {
          this.router.navigate(['/admin/posts'])
      });
    }

  }
}
