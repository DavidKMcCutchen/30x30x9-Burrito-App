import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritoComponent } from './burrito.component';

describe('BurritoComponent', () => {
  let component: BurritoComponent;
  let fixture: ComponentFixture<BurritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
