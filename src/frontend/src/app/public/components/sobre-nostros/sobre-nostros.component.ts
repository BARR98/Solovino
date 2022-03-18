import { Component, OnInit } from '@angular/core';
import { SobreNosotrosService } from 'src/app/core/Services/SobreNosotros/sobre-nosotros.service';

@Component({
  selector: 'app-sobre-nostros',
  templateUrl: './sobre-nostros.component.html',
  styleUrls: ['./sobre-nostros.component.css']
})
export class SobreNostrosComponent implements OnInit {
  
  info: any;
  infoToShow: String = "";
  constructor(
    public sobreNosotrosService: SobreNosotrosService
  ) { }

  ngOnInit(): void {
    this.sobreNosotrosService.getAllInfo()
    .subscribe(getedInfo => {
      this.info = getedInfo
      this.infoToShow = this.info[0]["informacion"]
      console.log(this.info)
      console.log(this.infoToShow)
      

    });
  }

}
