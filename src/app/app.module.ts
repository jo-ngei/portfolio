import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectsService } from './projects.service';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


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
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
