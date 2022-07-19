import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() data: any;
  @Output() onAdd = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['data']) {
      this.data = changes['data'].currentValue;
    }
  }

  add() {
    this.onAdd.emit('nuevo');
  }

  mod(row: any) {
    this.onEdit.emit(row);
  }

  del(row: any) {
    this.onDelete.emit(row);
  }
}
