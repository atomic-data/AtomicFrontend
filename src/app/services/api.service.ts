import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ConnectionStatus} from '../segments/banner/banner.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  private get(endpoint: string, params: { [name: string]: string } = null): any {
    return this.http.get(environment.baseUrl.concat(endpoint), {headers: this.httpOptions.headers, params: params, withCredentials: true});
  }

  private post(endpoint: string): any {
    return this.http.post(environment.baseUrl.concat(endpoint), null, {headers: this.httpOptions.headers, withCredentials: true});
  }

  public getOAuth(): any {
    window.location.replace(
      'https://github.com/login/oauth/authorize?client_id=4e42799cb0f8e6fe9f13&scope=read:org%20read:user%20read:discussion%20public_repo'
    );
  }

  public getAutocomplete(type: string, search: string): any {
    return this.get(`/autocomplete/${type}/${search}`);
  }

  public getAll(type: string, name: string): any {
    return this.get(`/info/${type}/${name}`);
  }

  public getConnection(): Observable<ConnectionStatus> {
    return this.get('/me');
  }

  /* BASE IDEA - API DOC RESPECTED

  public getLabels(id: string): any {
    return this.get('/labels', {id: id});
  }

  public getContributors(id: string): any {
    return this.get('/contributors', {id: id});
  }

  public getPullrequests(id: string): any {
    return this.get('/pullrequests', {id: id});
  }

  public getIssues(id: string): any {
    return this.get('/issues', {id: id});
  }

  public getRepositories(id: string): any {
    return this.get('/repositories', {id: id});
  }

  public getMisc(id: string): any {
    return this.get('/misc', {id: id});
  }

  public getExtcontrib(id: string): any {
    return this.get('/extcontrib', {id: id});
  }
  */
  disconnect(): Observable<ConnectionStatus>  {
    return this.get('/disconnect');
  }
}
