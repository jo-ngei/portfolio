import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AndroidService } from './services/android.service';
import { JavaService } from './services/java.service';
import { JavafxService } from './services/javafx.service';
import { PythonService } from './services/python.service';
import { TypescriptService } from './services/typescript.service';
import { AngularService } from './services/angular.service';
import { DjangoService } from './services/django.service';
import { KotlinService } from './services/kotlin.service';
import { ProjectsService } from './projects.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectComponent,
    PersonalInfoComponent,
    FooterComponent,
    SidebarComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectsService, AndroidService, JavaService, JavafxService, PythonService,
    TypescriptService, AngularService, DjangoService, KotlinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
