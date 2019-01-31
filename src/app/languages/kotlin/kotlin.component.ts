import { Component, OnInit } from '@angular/core';
import { KotlinService } from '../../services/kotlin.service';

@Component({
  selector: 'app-kotlin',
  templateUrl: './kotlin.component.html',
  styleUrls: ['./kotlin.component.scss']
})
export class KotlinComponent implements OnInit {

  public projects = [];

  constructor(private _kotlinService: KotlinService) { }

  ngOnInit() {
    this._kotlinService.getProjects()
    .subscribe(data => this.projects = data);
  }

}
