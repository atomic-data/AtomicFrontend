import {Component} from '@angular/core';
import {Label} from './services/label.interface';
import {SimpleData} from './services/simple-data.interface';
import {TableData} from './services/table-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public overviewData: SimpleData[] = [
    {title: 'Developers', data: '64'},
    {title: 'Contributors', data: '532'},
    {title: 'Stars 🌟', data: '12326'},
  ];

  public repoData: TableData = {
    type: 'list',
    headers: ['stars', '', 'contributors'],
    rows: [
      {title: '12002', data: 'Project Z', extra: ['137']},
      {title: '862', data: 'Project A', extra: ['67']},
      {title: '276', data: 'Project New', extra: ['13']},
      {title: '13', data: 'Project M', extra: ['8']},
    ],
  };

  public topLanguagesData: TableData = {
    type: 'table',
    headers: ['', 'Number of Projects'],
    rows: [
      {title: 'Java', data: '7'},
      {title: 'CSS', data: '5'},
      {title: 'HTML', data: '4'},
      {title: 'Python', data: '4'},
      {title: 'Shell', data: '2'},
    ],
  };

  public labels: Label[] = [
    {name: 'feature', type: 'type', background: '#EEEEEE', borderColor: '#EEEEEE'},
    {name: 'bug/fix', type: 'type', background: '#EEEEEE', borderColor: '#EEEEEE'},
    {name: 'build & ci', type: 'comp', background: '#c7def8', borderColor: '#c7def8'},
    {name: 'weeks', type: 'effort3', background: '#000000', borderColor: '#000000'},
    {name: 'angular-core-team', type: 'hotlist', background: '#d4c5f9', borderColor: '#d4c5f9'},
    {name: 'hours', type: 'effort1', background: '#bfe5bf', borderColor: '#bfe5bf'},
    {name: 'high', type: 'freq3', background: '#fbca04', borderColor: '#fbca04'},
    {name: 'regression', type: 'severity5', background: '#0052cc', borderColor: '#0052cc'},
  ];
}
