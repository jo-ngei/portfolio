import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../projects';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  private _url = 'assets/data/angular.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this._url);
  }

}
