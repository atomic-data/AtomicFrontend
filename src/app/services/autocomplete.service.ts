import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, mergeMap} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  public input$: BehaviorSubject<[string, string]>;
  public output$: Observable<string[]>;

  constructor(private apiService: ApiService) {
    this.input$ = new BehaviorSubject(['', ''] as [string, string]);
    this.output$ = this.input$.pipe(
      filter(([, search]: [string, string]) => search !== null && search !== ''),
      mergeMap(([type, search]: [string, string]) => {
        return apiService.getAutocomplete(type, search);
      })
    );
  }
}
