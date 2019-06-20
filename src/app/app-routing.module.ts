import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpComponent } from './components/list-emp/list-emp.component';
import { AddEmpComponent } from './components/add-emp/add-emp.component';

const routes: Routes = [

  {path: '', component:ListEmpComponent, pathMatch:'full'},
  {path: 'list-emp', component: ListEmpComponent},
  {path: 'add-emp', component:AddEmpComponent}
];

export const places = [

  ListEmpComponent,
  AddEmpComponent
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
