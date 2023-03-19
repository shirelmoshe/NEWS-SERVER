import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatChipEditedEvent, MatChipEvent } from '@angular/material/chips';
import { Observable } from 'rxjs/internal/Observable';
import { ICategory } from '../models/categories-model';
import './categories-body.component';

@Component({
  selector: 'nwp-categories-body',
  templateUrl: './categories-body.component.html',
  styleUrls: ['./categories-body.component.less'],
})
export class CategoriesBodyComponent {
  @Input() id: number = 1;
  @Input() categoryName: string = '';
  @Input() categoryUserEmail: string = '';
  @Input() isSelected: boolean | undefined = undefined;
  @Input() currentCategory: ICategory | null = null;

  constructor() {}
}
