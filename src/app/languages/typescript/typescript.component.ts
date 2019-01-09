import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  public projects = [];

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
    .subscribe(data => this.projects = data);
  }

}
