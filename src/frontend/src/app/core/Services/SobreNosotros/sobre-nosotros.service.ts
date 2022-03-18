import { Injectable } from '@angular/core';
import { SobreNosotros } from '../../Models/SobreNosotros/sobre-nosotros';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SobreNosotrosService {
  url = 'http://localhost:3000/api/huellitas/sobre-nosotros'
  info: any
  informaciones: SobreNosotros[] = []
  
  constructor(private http: HttpClient){
    this.info = this.info ,
    this.informaciones = new Array()
   }

  getAllInfo() {
    return this.http.get(this.url);
  }


  createInfo(info: SobreNosotros) {
    return this.http.post(this.url, info);
  }

  updateInfo(_id: string , info: SobreNosotros) {
    return this.http.put(this.url + '/' + _id, info);
  }

  deleteInfo(_id: String) {
    return this.http.delete(this.url + '/' + _id);
  }
}
