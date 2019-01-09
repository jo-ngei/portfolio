import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {

  public projects = [];
  public javaApps = [];

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
