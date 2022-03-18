import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { BancAcountService } from 'src/app/core/Services/BancAcount/banc-acount.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-view-especific-acount',
  templateUrl: './view-especific-acount.component.html',
  styleUrls: ['./view-especific-acount.component.css']
})
export class ViewEspecificAcountComponent implements OnInit {
  _id: any;
  acount: any;
  wantEdit: Boolean = false;
  form!: FormGroup;

  constructor(
    public bancAcountService: BancAcountService,
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
      this.bancAcountService.getAcount(this._id)
        .subscribe(getedAcount => {
          this.acount = getedAcount
          console.log(getedAcount)

        });
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

  WantEdit(){
    this.wantEdit = true;
  }

  DeleteAcount(){
    if(confirm("Desea eliminar éste elemento?")){
      this.bancAcountService.deleteAcount(this._id)
      .subscribe(deletedAcount => {
        console.log(deletedAcount)
        this.router.navigate(["admin/cuentas"])
      })
    }

  }

  SaveUpdatedAcount(){
    const updatedAcount = this.form.value
    this.bancAcountService.updateAcount(this._id, updatedAcount)
    .subscribe( updatedAcount => {
      this.router.navigate(['admin/cuentas'])
    })
  }

}
