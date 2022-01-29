import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeMainSection01Component } from './de-main-section01.component';

describe('DeMainSection01Component', () => {
  let component: DeMainSection01Component;
  let fixture: ComponentFixture<DeMainSection01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeMainSection01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeMainSection01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
