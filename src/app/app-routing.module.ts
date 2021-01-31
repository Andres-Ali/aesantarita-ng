import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { GruposComponent } from './components/grupos/grupos.component';

const routes: Routes = [
    {
        path: '',
        component: EmpleadosComponent,
        pathMatch: 'full'
    },
    {
        path: 'empleados',
        component: EmpleadosComponent,
    },
    {
        path: 'grupos',
        component: GruposComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutungModule {}