import {SimpleData} from './simple-data.interface';

export interface TableData {
  type: 'list' | 'table';
  headers: string[];
  rows: SimpleData[];
}
