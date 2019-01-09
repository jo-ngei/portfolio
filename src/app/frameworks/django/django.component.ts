import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-django',
  templateUrl: './django.component.html',
  styleUrls: ['./django.component.scss']
})
export class DjangoComponent implements OnInit {

  public projects = [];

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
