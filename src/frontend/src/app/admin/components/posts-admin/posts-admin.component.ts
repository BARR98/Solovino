import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/Services/Posts/posts.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-posts-admin',
  templateUrl: './posts-admin.component.html',
  styleUrls: ['./posts-admin.component.css']
})
export class PostsAdminComponent implements OnInit {

  posts: any;
  _id: String = "";
  wantCreate: Boolean = false;
  form!: FormGroup;

  constructor(
    public postService: PostsService,
    public router: Router,
    public formBuilder: FormBuilder

  ) { 
    this.BuildForm()
  }

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(getedPosts => {
      this.posts = getedPosts
      console.log(this.posts)
      

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

  redirectToViewEspecificPost(_id: string){
    this.router.navigate(['admin/view-post',[ _id]])
    
  }

  WantCreate(){
    this.wantCreate = true;
  }

  SaveNewPost(){
    const post = this.form.value
    this.postService.createPost(post)
    .subscribe(newPost => {
      console.log(newPost)
    })
  }
}
