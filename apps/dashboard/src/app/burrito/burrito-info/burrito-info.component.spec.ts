import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritoInfoComponent } from './burrito-info.component';

describe('BurritoInfoComponent', () => {
  let component: BurritoInfoComponent;
  let fixture: ComponentFixture<BurritoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurritoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurritoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
