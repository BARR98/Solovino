import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adopcion } from '../../Models/Adopcion/adopcion';

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  url = 'http://localhost:3000/api/huellitas/adopciones'
  adopcion: any
  adopciones: Adopcion[] = []
  
  constructor(private http: HttpClient){
    this.adopcion = this.adopcion,
    this.adopciones = new Array()
   }

  getAllAdopciones() {
    return this.http.get(this.url);
  }

  getAdopcion(_id: string) {
    return this.http.get(this.url + '/' + _id);
  }

  createAdopcion(adopcion: Adopcion) {
    return this.http.post(this.url, adopcion);
  }


  updateAdopcion(_id: string , adopcion: Adopcion) {
    return this.http.put(this.url + '/' + _id, adopcion);
  }

  deleteAdopcion(_id: String) {
    return this.http.delete(this.url + '/' + _id);
  }
}
