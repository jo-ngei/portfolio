import { Component, OnInit } from '@angular/core';
import { DjangoService } from '../../services/django.service';

@Component({
  selector: 'app-django',
  templateUrl: './django.component.html',
  styleUrls: ['./django.component.scss']
})
export class DjangoComponent implements OnInit {

  public projects = [];

  constructor(private _djangoService: DjangoService) { }

  ngOnInit() {
    this._djangoService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
