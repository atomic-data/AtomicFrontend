import { NEr } from './../../../tools/n-er.tool';
import { CompleteResult } from './../../services/complete-result.interface';
import { AutocompleteService } from './../../services/autocomplete.service';
import { Component } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public searchValue = '';
  public listOfOption = ['User', 'Organization', 'Project'];
  public selected = '';

  public ner = NEr;

  public projectName = 'Atomic Data Insights for Github';

  public searchList$: Observable<string[]>;

  constructor(private completer: AutocompleteService) {
    this.searchList$ = completer.output$.pipe(
      map(results => results.map((obj: CompleteResult) => obj.word))
    );
  }

  executeSearch(value: string): void {
    this.completer.input$.next(value);
  }

  isNotSelected(value: string): boolean {
    return this.selected !== value;
  }
}
