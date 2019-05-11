import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
    const jwt = window.localStorage.getItem('jwt');

    if (jwt) {
      this.httpOptions.headers.append('Authorization', `token ${jwt}`);
    }
  }

  private get(endpoint: string, params: { [name: string]: string } = null): any {
    return this.http.get(environment.baseUrl.concat(endpoint), {headers: this.httpOptions.headers, params: params});
  }

  private post(endpoint: string): any {
    return this.http.post(environment.baseUrl.concat(endpoint), null, {headers: this.httpOptions.headers});
  }

  public getOAuth(): any {
    return this.post('/oauth');
  }

  public getAutocomplete(type: string, search: string): any {
    return this.get(`/autocomplete/${type}/${search}`);
  }

  public getAll(type: string, name: string): any {
    return this.get(`/getall/${type}/${name}`);
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
}
