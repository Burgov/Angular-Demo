import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component"

const routes: Routes = [
  {
    path:'register',
    loadChildren: () => import('./register/register.module').then((m)=>m.RegisterModule)
  },{
    path:"**",
    loadChildren: () => NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
