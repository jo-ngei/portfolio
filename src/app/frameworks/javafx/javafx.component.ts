import { Component, OnInit } from '@angular/core';
import { JavafxService } from '../../services/javafx.service';

@Component({
  selector: 'app-javafx',
  templateUrl: './javafx.component.html',
  styleUrls: ['./javafx.component.scss']
})
export class JavafxComponent implements OnInit {

  public projects = [];

  constructor(private _javafxService: JavafxService) { }

  ngOnInit() {
    this._javafxService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
