import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritoDetailsComponent } from './burrito-details.component';

describe('BurritoDetailsComponent', () => {
  let component: BurritoDetailsComponent;
  let fixture: ComponentFixture<BurritoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurritoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurritoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
