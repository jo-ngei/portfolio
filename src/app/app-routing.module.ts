import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {path: '', redirectTo: 'portolio' , pathMatch: 'full'},
  {path: 'portfolio', component: LayoutsComponent},
  {  path: '**',  redirectTo: 'portfolio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules = [LayoutsComponent];

