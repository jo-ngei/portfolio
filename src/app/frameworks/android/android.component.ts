import { Component, OnInit } from '@angular/core';
import { AndroidService } from '../../services/android.service';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent implements OnInit {

  public projects = [];

  constructor(private _androidService: AndroidService) { }

  ngOnInit() {
    this._androidService.getProjects()
    .subscribe(data => this.projects = data);
  }


}
