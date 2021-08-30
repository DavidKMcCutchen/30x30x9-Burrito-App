import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritoListComponent } from './burrito-list.component';

describe('BurritoListComponent', () => {
  let component: BurritoListComponent;
  let fixture: ComponentFixture<BurritoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurritoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurritoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
