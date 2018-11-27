import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsService } from './projects.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectComponent,
    PersonalInfoComponent,
    LayoutsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
