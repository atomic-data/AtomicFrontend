import {SimpleData} from './simple-data.interface';
import {TableData} from './table-data.interface';
import {Label} from './label.interface';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PlopService {
  public userDescription: string;
  public overviewData: SimpleData[];
  public repoData: TableData;
  public topLanguages: TableData;
  public labels: Label[];
}
