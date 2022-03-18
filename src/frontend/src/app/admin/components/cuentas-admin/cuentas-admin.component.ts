import { Component, OnInit } from '@angular/core';
import { BancAcountService } from 'src/app/core/Services/BancAcount/banc-acount.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cuentas-admin',
  templateUrl: './cuentas-admin.component.html',
  styleUrls: ['./cuentas-admin.component.css']
})
export class CuentasAdminComponent implements OnInit {

  cuentas: any;
  form!: FormGroup;
  wantCreate: Boolean = false;
  wantEdit: Boolean = false;

  constructor(
    public bancAcountService: BancAcountService,
    public formBuilder:FormBuilder,
    public router:Router
  ) {
    this.BuildForm()
   }

  ngOnInit(): void {
    this.bancAcountService.getAllAcounts()
    .subscribe(getedAcount => {
      this.cuentas = getedAcount
      console.log(this.cuentas)
      

    });


  }

  public BuildForm(){
    this.form = this.formBuilder.group({
      banco: ['',
        [Validators.minLength(4)]],
      numero_cuenta: ['',
        [Validators.minLength(1)]],
      numero_tarjeta: ['',
        [Validators.minLength(1)]],
      titular: ['',
        [Validators.minLength(10)]]
    })
  }

  WantCreate(){
    this.wantCreate = true;
  }

  WantEdit(){
    this.wantEdit = true;
  }

  SaveNewAcount(){
    const newAcount = this.form.value
    this.bancAcountService.createAcount(newAcount)
    .subscribe( acountCreated => {
      this.router.navigate(['admin/cuentas'])
      location.reload()
    })
  }

  DeleteAcount(id: String){
    this.bancAcountService.deleteAcount(id)
    .subscribe(deletedAcount => {
      console.log(deletedAcount)
    })
  }

  RedirectToEspecificAcount(){
    
  }
}
