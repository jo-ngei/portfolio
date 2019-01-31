import { Component, OnInit } from '@angular/core';
import { PythonService } from '../../services/python.service';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit {

  public projects = [];

  constructor(private _pythonService: PythonService) { }

  ngOnInit() {
    this._pythonService.getProjects()
    .subscribe(data => this.projects = data);
  }

}
