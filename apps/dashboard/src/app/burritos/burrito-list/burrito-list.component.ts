import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Burrito } from "@burritos/api-interfaces";

@Component({
  selector: 'burritos-burrito-list',
  templateUrl: './burrito-list.component.html',
  styleUrls: ['./burrito-list.component.scss']
})
export class BurritoListComponent {
  @Input() burritos: Burrito[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() burritoViewed = new EventEmitter();
}
