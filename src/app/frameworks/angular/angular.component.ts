import { Component, OnInit } from '@angular/core';
import { AngularService } from '../../services/angular.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  public projects = [];

  constructor(private _angularService: AngularService) { }

  ngOnInit() {
    this._angularService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
