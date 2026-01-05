import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timelife } from './timelife';

describe('Timelife', () => {
  let component: Timelife;
  let fixture: ComponentFixture<Timelife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timelife]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timelife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
