import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Group } from '../models/group-model';
import { Employee } from '../models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http : HttpClient) { }

  cargarGrupo() {
    const url = "https://api-example-aes.herokuapp.com/list_groups";
    return this.http.get<Group>(url);
  }

  getEmpleadoByGrupo(grupo:string) {
    const url = "https://api-example-aes.herokuapp.com/list_employees/" + grupo;
    return this.http.get<Employee>(url);
  }
  

}
