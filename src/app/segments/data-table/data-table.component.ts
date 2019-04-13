import {Component, Input, OnInit} from '@angular/core';
import {TableData} from '../../services/table-data.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input()
  public tableData: TableData;

  public isList = false;

  ngOnInit(): void {
    this.isList = this.tableData.type === 'list';
  }
}
