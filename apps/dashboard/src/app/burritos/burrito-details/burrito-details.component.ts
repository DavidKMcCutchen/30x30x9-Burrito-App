import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Burrito } from "@burritos/api-interfaces";

@Component({
  selector: 'burritos-burrito-details',
  templateUrl: './burrito-details.component.html',
  styleUrls: ['./burrito-details.component.scss']
})
export class BurritoDetailsComponent {
  currentBurrito: Burrito;
  originalTitle: string;


  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set burrito(value) {
    if (value) this.originalTitle = value.name;
    this.currentBurrito = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
