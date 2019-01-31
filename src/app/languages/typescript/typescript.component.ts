import { Component, OnInit } from '@angular/core';
import { TypescriptService } from '../../services/typescript.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  public projects = [];

  constructor(private _typeScript: TypescriptService) { }

  ngOnInit() {
    this._typeScript.getProjects()
    .subscribe(data => this.projects = data);
  }

}
