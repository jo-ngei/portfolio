import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-kotlin',
  templateUrl: './kotlin.component.html',
  styleUrls: ['./kotlin.component.scss']
})
export class KotlinComponent implements OnInit {

  public projects = [];

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
    .subscribe(data => this.projects = data);
  }

}
