import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { GruposService } from 'src/app/services/grupos.service';
import { stringify } from '@angular/compiler/src/util';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  constructor(private gruposSvc: GruposService) { }

  listGrupos: any = [];

  filterGroup = '';

  seletedGrup = '';
  listEmpleados: any = [];

   drop(event: CdkDragDrop<any>) {

    if ( this.seletedGrup === event.item.element.nativeElement['outerText'] ) {
      return;
    }

    this.seletedGrup = event.item.element.nativeElement['outerText'];
    
    // console.log(this.seletedGrup);
      
    this.gruposSvc.getEmpleadoByGrupo(this.seletedGrup)
      .subscribe((resp) => {
        this.listEmpleados = resp;
        this.checked = true;
        this.setAllChecked();
      });

  }

  checked = true;
  checkUncheckAll(): void {
    this.listEmpleados.forEach(empleado => {
      empleado.isSelected = this.checked!;
    });
    this.checked!;
  }

  setAllChecked(): void {
    this.listEmpleados.forEach(empleado => {
      empleado.isSelected = true;
    });
    // console.log(this.listEmpleados)
  }

  deleteCard(): void {
    this.listEmpleados = [];
    this.seletedGrup = '';
  }

  ngOnInit(): void {
    this.gruposSvc.cargarGrupo()
    .subscribe( (resp) => {
      this.listGrupos = resp;
    });
  }

}
