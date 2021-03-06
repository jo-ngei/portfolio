import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../projects';

@Injectable({
  providedIn: 'root'
})
export class JavafxService {

  private _url = 'assets/data/javafx.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this._url);
  }
}
