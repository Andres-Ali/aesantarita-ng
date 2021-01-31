import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FormsModule } from '@angular/forms';

import { AppRoutungModule } from './app-routing.module';

import { FilterPipe } from './pipes/filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { GruposComponent } from './components/grupos/grupos.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FilterPipe,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutungModule,
    HttpClientModule,
    
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
