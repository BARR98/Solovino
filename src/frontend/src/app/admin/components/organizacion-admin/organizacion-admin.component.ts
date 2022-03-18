import { Component, OnInit } from '@angular/core';
import { SobreNosotrosService } from 'src/app/core/Services/SobreNosotros/sobre-nosotros.service';
import { Form, FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-organizacion-admin',
  templateUrl: './organizacion-admin.component.html',
  styleUrls: ['./organizacion-admin.component.css']
})
export class OrganizacionAdminComponent implements OnInit {

  info: any;
  id: string = "";
  wantEdit: Boolean = false;
  wantCreate: Boolean = false;
  form!: FormGroup;
  
  constructor(
    public sobreNosotros: SobreNosotrosService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.BuildForm()
  }

  ngOnInit(): void {
    this.sobreNosotros.getAllInfo()
    .subscribe(infoGeted=> {
        this.info = infoGeted;
        this.id = this.info[0]["_id"]
    })
  }

  public BuildForm(){
    this.form = this.formBuilder.group({
      informacion: ['',
        [Validators.minLength(4)]]
    })
  }

  WantEdit(){
    this.wantEdit = true;
  }

  WantCreate(){
    this.wantCreate = true;
  }

  SaveUpdatedInfo(){
    const newInfo= this.form.value
    console.log(this.id)
    this.sobreNosotros.updateInfo(this.id , newInfo)
    .subscribe(infoUpdated => {
          location.reload()
    })

  }

  SaveNewInfo(){
    const newInfo = this.form.value
    this.sobreNosotros.createInfo(newInfo)
    .subscribe(newInfo => {
      this.router.navigate(["admin/organizacion"])
    })
  }


  ResetForm(){
    this.form.setValue({
        informacion:""
      })
  }

}
