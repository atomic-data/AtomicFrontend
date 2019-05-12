import {NEr} from '../../../tools/n-er.tool';
import {AutocompleteService} from '../../services/autocomplete.service';
import {Component} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApiService} from '../../services/api.service';
import {first, shareReplay} from 'rxjs/operators';

export interface ConnectionStatus {
  logged: boolean;
  user?: {
    avatarUrl: string;
    login: String;
  };
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public searchValue = '';
  public listOfOption = ['User', 'Organization', 'Repository'];
  public selected = this.listOfOption[0];

  public ner = NEr;

  // TODO: Inject the project name with a service
  public projectName = 'Atomic Data Insights for Github';

  public searchList$: Observable<string[]>;

  public connected: Subject<ConnectionStatus> = new BehaviorSubject(null);

  constructor(private completer: AutocompleteService, private apiService: ApiService) {
    this.searchList$ = completer.output$;
    apiService.getConnection().pipe(shareReplay(1), first()).subscribe(stat => this.connected.next(stat));
  }

  public executeCompletion(value: string): void {
    this.completer.input$.next([this.selected, value]);
  }

  /**
   * Search through git with the selected mode and research value
   */
  public search(): void {
    console.log(`Search ${this.selected} ${this.searchValue}`);
    this.apiService.getAll(this.selected, this.searchValue);
  }

  /**
   * Connect to github with OAuth
   */
  public connect(): void {
    this.apiService.getOAuth();
  }

  /**
   * Connect to github with OAuth
   */
  public disconnect(): void {
    this.apiService.disconnect().pipe(shareReplay(1), first()).subscribe(stat => this.connected.next(stat));
  }

}
