import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';
import {PlopService} from './services/plop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService, private plopService: PlopService) {
  }

  ngOnInit(): void {
    this.apiService.getAll('user', 'EnzDev');
  }
}
