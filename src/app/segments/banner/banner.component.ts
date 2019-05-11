import {NEr} from '../../../tools/n-er.tool';
import {AutocompleteService} from '../../services/autocomplete.service';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public searchValue = '';
  public listOfOption = ['User', 'Organization', 'Project'];
  public selected = this.listOfOption[0];

  public ner = NEr;

  // TODO: Inject the project name with a service
  public projectName = 'Atomic Data Insights for Github';

  public searchList$: Observable<string[]>;

  constructor(private completer: AutocompleteService, private apiService: ApiService) {
    this.searchList$ = completer.output$;
  }

  public executeCompletion(value: string): void {
    this.completer.input$.next([this.selected, value]);
  }

  /**
   * Search through git with the selected mode and research value
   */
  public search(): void {
    this.apiService.getAll(this.selected, this.searchValue);
  }

  /**
   * Connect to github with OAuth
   */
  public connect(): void {
    this.apiService.getOAuth();
  }
}
