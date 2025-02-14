import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateGist, Gist } from '../types/gists.types';
import {
  CREATE_GIST,
  DELETE_GIST,
  FORK_GIST,
  GET_GIST_BY_ID,
  GET_PUBLIC_GISTS,
  GET_STARRED_GISTS,
  GET_USER_GISTS,
  STAR_UNSTAR_GIST,
} from '../constants/apiRoutes';

@Injectable({
  providedIn: 'root',
})
export class GistsService {
  private http = inject(HttpClient);

  getPublicGists(): Observable<Gist[]> {
    return this.http.get<Gist[]>(GET_PUBLIC_GISTS);
  }

  getGistByID(gistID: string): Observable<Gist> {
    return this.http.get<Gist>(GET_GIST_BY_ID(gistID));
  }

  getUserGists(): Observable<Gist[]> {
    return this.http.get<Gist[]>(GET_USER_GISTS);
  }

  createGist(gist: CreateGist): Observable<Gist> {
    return this.http.post<Gist>(CREATE_GIST, gist);
  }

  deleteGist(gistID: string): Observable<void> {
    return this.http.delete<void>(DELETE_GIST(gistID));
  }

  // updateGist(gistID: string, Gist: CreateGist): Observable<Gist> {
  //   return this.http.patch<Gist>(
  //     `${GistEndPoints.GIST_BY_ID}/${gistID}`,
  //     Gist
  //   );
  // }

  starGist(gistID: string): Observable<void> {
    return this.http.put<void>(STAR_UNSTAR_GIST(gistID), { gist_id: gistID });
  }

  getStarredGists(): Observable<Gist[]> {
    return this.http.get<Gist[]>(GET_STARRED_GISTS);
  }

  // isGistStarred(gistID: string): Observable<any> {
  //   return this.http.get<void>(STAR_UNSTAR_GIST(gistID));
  // }

  forkGist(gistID: string): Observable<Gist> {
    return this.http.post<Gist>(FORK_GIST(gistID), { gist_id: gistID });
  }

  unstarGist(gistID: string): Observable<Gist> {
    return this.http.delete<Gist>(STAR_UNSTAR_GIST(gistID));
  }
}
