import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BancAcount } from '../../Models/BancAcount/banc-acount';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class BancAcountService {

  url = 'http://localhost:3000/api/huellitas/cuentas-banco'
  cuenta: any
  cuentas: BancAcount[] = []
  
  constructor(private http: HttpClient){
    this.cuenta = this.cuenta,
    this.cuentas = new Array()
   }

  getAllAcounts() {
    return this.http.get(this.url);
  }

  getAcount(_id: string) {
    return this.http.get(this.url + '/' + _id);
  }

  createAcount(acount: BancAcount) {
    return this.http.post(this.url, acount);
  }


  updateAcount(_id: string , acount: BancAcount) {
    return this.http.put(this.url + '/' + _id, acount);
  }

  deleteAcount(_id: String) {
    return this.http.delete(this.url + '/' + _id);
  }
}
