import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gist } from '../types/gists.types';

@Injectable({
  providedIn: 'root',
})
export class GistsService {
  private readonly gistAPI = 'https://api.github.com/gists/public';
  private http = inject(HttpClient);

  getPublicGists(): Observable<Gist[]> {
    return this.http.get<Gist[]>(this.gistAPI);
  }
}
