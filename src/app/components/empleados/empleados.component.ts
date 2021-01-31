import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadosSvc: EmpleadosService) { }

  filterpost = '';
  page:number;
  dev_group: String[] = ['Front-End', 'Back-End', 'Full-Stack', 'Android Developer','Project Manager'];
  public listEmpleados: any = [];

  ngOnInit(): void {
    this.actualizaTabla();
  }

  actualizaTabla(): void {
    this.empleadosSvc.cargarEmpleados()
    .subscribe( (resp) => {
      this.listEmpleados = resp;
    });
  }

  empleadosForm = new FormGroup({
    name: new FormControl('',Validators.compose([Validators.maxLength(30), Validators.required])),
    last_name: new FormControl('',Validators.compose([Validators.maxLength(30), Validators.required])),
    birthday: new FormControl('',Validators.compose([Validators.maxLength(30), Validators.required])),
    developer_group: new FormControl('',Validators.compose([Validators.maxLength(30), Validators.required])),
  });

  enviarEmpleado(empleado:any){
    this.empleadosSvc.enviarEmpleado(empleado)
    .subscribe( (resp) => {
      this.actualizaTabla();
      this.empleadosForm.reset();
    }); 
  }


}

