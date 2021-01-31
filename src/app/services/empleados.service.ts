import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from '../models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http : HttpClient) { }

  cargarEmpleados() {
    const url = "https://api-example-aes.herokuapp.com/list_employees";
    return this.http.get<Employee>(url);
  }

  enviarEmpleado(empleado: Employee){
    const url = "https://api-example-aes.herokuapp.com/save_employee";
    return this.http.post(url, empleado);
  }

}
