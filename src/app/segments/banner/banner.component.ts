import { NEr } from './../../../tools/n-er.tool';
import { CompleteResult } from './../../services/complete-result.interface';
import { AutocompleteService } from './../../services/autocomplete.service';
import { Component, OnInit } from '@angular/core';
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
  public selected = this.listOfOption[0];

  public ner = NEr;

  // TODO: Inject the project name with a service
  public projectName = 'Atomic Data Insights for Github';

  public searchList$: Observable<string[]>;

  constructor(private completer: AutocompleteService) {
    this.searchList$ = completer.output$.pipe(
      map(results => results.map((obj: CompleteResult) => obj.word))
    );
  }

  public executeCompletion(value: string): void {
    this.completer.input$.next(value);
  }

  public isNotSelected(value: string): boolean {
    return this.selected.toLowerCase() !== value.toLowerCase();
  }

  /**
   * Search through git with the selected mode and research value
   */
  public search(): void {
    // TODO: Execute the search
    console.log(`Searching ${this.selected} with query "${this.searchValue}"`);
  }
}
