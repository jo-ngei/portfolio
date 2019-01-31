import { Component, OnInit } from '@angular/core';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { JavafxService } from '../../services/javafx.service';
import { JavaService } from '../../services/java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {

  public projects = [];
  public javaApps = [];

  constructor(private _javaService: JavaService) { }

  ngOnInit() {
    this._javaService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
