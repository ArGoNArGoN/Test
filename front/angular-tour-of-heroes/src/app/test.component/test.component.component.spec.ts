import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test.ComponentComponent } from './test.component.component';

describe('Test.ComponentComponent', () => {
  let component: Test.ComponentComponent;
  let fixture: ComponentFixture<Test.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test.ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
