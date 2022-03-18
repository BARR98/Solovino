import { Component, OnInit } from '@angular/core';
import { BancAcountService } from 'src/app/core/Services/BancAcount/banc-acount.service';
@Component({
  selector: 'app-public-donaciones',
  templateUrl: './public-donaciones.component.html',
  styleUrls: ['./public-donaciones.component.css']
})
export class PublicDonacionesComponent implements OnInit {

  acounts: any;

  constructor(
    public bancAcountService: BancAcountService,
  ) { }

  ngOnInit(): void {
    this.bancAcountService.getAllAcounts()
    .subscribe(getedAcount => {
      this.acounts = getedAcount
      console.log(this.acounts)
      

    });
  }

}
