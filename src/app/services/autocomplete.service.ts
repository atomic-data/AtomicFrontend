import { CompleteResult } from './complete-result.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  public input$: BehaviorSubject<string>;
  public output$: Observable<CompleteResult[]>;

  constructor(private http: HttpClient) {
    this.input$ = new BehaviorSubject(null);
    this.output$ = this.input$.pipe(
      filter(search => search !== null && search !== ''),
      mergeMap(search => {
        // TODO: Use real API
        return this.http.get<CompleteResult[]>(
          `https://api.datamuse.com/words?sp=${search}*&max=10`
        );
      })
    );
  }
}
