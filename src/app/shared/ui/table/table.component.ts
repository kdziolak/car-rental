import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface Cols {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> {
  @Input() cols: Cols[] = [];
  @Input() rowData: T[] = [];

  first = 0;
}
