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
    {name: 'type: feature', background: '#EEEEEE', borderColor: '#EEEEEE'},
    {name: 'type: bug/fix', background: '#EEEEEE', borderColor: '#EEEEEE'},
    {name: 'comp: build & ci', background: '#c7def8', borderColor: '#c7def8'},
    {name: 'effort3: weeks', background: '#000000', borderColor: '#000000'},
    {name: 'hotlist: angular-core-team', background: '#d4c5f9', borderColor: '#d4c5f9'},
    {name: 'effort1: hours', background: '#bfe5bf', borderColor: '#bfe5bf'},
    {name: 'freq3: high', background: '#fbca04', borderColor: '#fbca04'},
    {name: 'severity5: regression', background: '#0052cc', borderColor: '#0052cc'},
  ];

  userDescription: String = 'Hello<br>Yo';
}
