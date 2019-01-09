import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-javafx',
  templateUrl: './javafx.component.html',
  styleUrls: ['./javafx.component.scss']
})
export class JavafxComponent implements OnInit {

  public projects = [];

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
