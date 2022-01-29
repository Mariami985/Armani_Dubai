import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeryMainComponent } from './luxery-main.component';

describe('LuxeryMainComponent', () => {
  let component: LuxeryMainComponent;
  let fixture: ComponentFixture<LuxeryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxeryMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxeryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
