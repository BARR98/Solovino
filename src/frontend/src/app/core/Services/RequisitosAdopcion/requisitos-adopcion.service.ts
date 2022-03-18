import { Injectable } from '@angular/core';
import { RequisitosAdopcion } from '../../Models/RequisitosAdopcion/requisitos-adopcion';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequisitosAdopcionService {

  url = 'http://localhost:3000/api/huellitas/requisitos-adopcion'
  requisito: any
  requisitos: RequisitosAdopcion[] = []
  
  constructor(private http: HttpClient){
    this.requisito = this.requisito,
    this.requisitos = new Array()
   }

  getAllRequisitos() {
    return this.http.get(this.url);
  }

  getRequisitos(_id: string) {
    return this.http.get(this.url + '/' + _id);
  }

  createRequisito(requisito: RequisitosAdopcion) {
    return this.http.post(this.url, requisito);
  }


  updateRequisito(_id: string , requisito: RequisitosAdopcion) {
    return this.http.put(this.url + '/' + _id, this.requisito);
  }

  deleterRequsito(_id: String) {
    return this.http.delete(this.url + '/' + _id);
  }
}
