import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ConnectionStatus} from '../segments/banner/banner.component';
import {Observable} from 'rxjs';
import {Info} from './info.interface';
import {PlopService} from './plop.service';

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

  constructor(private http: HttpClient, private plopService: PlopService) {
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
    return this.get(`/info/${type}/${name}`).subscribe((info: Info) => {
      this.plopService.userDescription = info.description;
      this.plopService.overviewData = [
        {title: 'Stars 🌟', data: info.stars},
        {title: 'Contributors', data: info.contributors},
      ];

      const repoRows = [];
      const languagesRows = [];

      for (let i = 0; i < info.topRepositories.length; i++) {
        const repository = info.topRepositories[i];
        repoRows.push({
          title: repository.stars,
          data: repository.name,
          extra: [repository.contributors]
        });
      }

      for (let j = 0; j < info.topLanguages.length; j++) {
        const language = info.topLanguages[j];
        languagesRows.push({
          title: language.name,
          data: language.repos
        });
      }

      this.plopService.repoData = {
        type: 'list',
        headers: ['stars', '', 'contributors'],
        rows: repoRows,
      };

      this.plopService.topLanguages = {
        type: 'table',
        headers: ['', 'Number of Projects'],
        rows: languagesRows,
      };

      this.plopService.labels = [
        {name: 'proto', background: '#EEEEEE', borderColor: '#EEEEEE'},
      ];
    });
  }

  public getConnection(): Observable<ConnectionStatus> {
    return this.get('/me');
  }

  disconnect(): Observable<ConnectionStatus> {
    return this.get('/disconnect');
  }
}
