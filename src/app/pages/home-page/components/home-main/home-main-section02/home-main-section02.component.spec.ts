import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainSection02Component } from './home-main-section02.component';

describe('HomeMainSection02Component', () => {
  let component: HomeMainSection02Component;
  let fixture: ComponentFixture<HomeMainSection02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainSection02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainSection02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
