import {Component, Input} from '@angular/core';
import {Label} from '../../services/label.interface';

@Component({
  selector: 'app-label-box',
  templateUrl: './label-box.component.html',
  styleUrls: ['./label-box.component.scss']
})
export class LabelBoxComponent {
  @Input()
  public labels: Label[] = [];
}
