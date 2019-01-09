import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit {

  public projects = [];

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
    .subscribe(data => this.projects = data);
  }

}
