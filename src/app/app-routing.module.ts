import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AndroidComponent } from './frameworks/android/android.component';
import { DjangoComponent } from './frameworks/django/django.component';
import { JavafxComponent } from './frameworks/javafx/javafx.component';
import { AngularComponent } from './frameworks/angular/angular.component';
import { KotlinComponent } from './languages/kotlin/kotlin.component';
import { JavaComponent } from './languages/java/java.component';
import { TypescriptComponent } from './languages/typescript/typescript.component';
import { PythonComponent } from './languages/python/python.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'main' , pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'android', component: AndroidComponent},
  {path: 'django', component: DjangoComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'javafx', component: JavafxComponent},
  {path: 'kotlin', component: KotlinComponent},
  {path: 'java', component: JavaComponent},
  {path: 'typescript', component: TypescriptComponent},
  {path: 'python', component: PythonComponent},
  {path: '**',  redirectTo: 'main' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [MainComponent, AndroidComponent, DjangoComponent,
  JavafxComponent, AngularComponent, KotlinComponent, JavaComponent, TypescriptComponent,
  PythonComponent];

