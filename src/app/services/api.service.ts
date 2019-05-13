import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ConnectionStatus} from '../segments/banner/banner.component';
import {Observable} from 'rxjs';
import {Info} from './info.interface';

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

  private get(endpoint: string): any {
    return this.http.get(environment.baseUrl.concat(endpoint), {
      headers: this.httpOptions.headers,
      withCredentials: true,
    });
  }

  public getOAuth(): any {
    window.location.replace(
      'https://github.com/login/oauth/authorize?client_id=4e42799cb0f8e6fe9f13&scope=read:org%20read:user%20read:discussion%20public_repo'
    );
  }

  public getAutocomplete(type: string, search: string): any {
    return this.get(`/autocomplete/${type}/${search}`);
  }

  public getAll(type: string, name: string): Observable<Info> {
    return this.get(`/info/${type}/${name}`);
  }

  public getConnection(): Observable<ConnectionStatus> {
    return this.get('/me');
  }

  disconnect(): Observable<ConnectionStatus> {
    return this.get('/disconnect');
  }
}
