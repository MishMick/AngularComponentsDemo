import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoadingSpinnerComponent } from './component-loading-spinner.component';

describe('ComponentLoadingSpinnerComponent', () => {
  let component: ComponentLoadingSpinnerComponent;
  let fixture: ComponentFixture<ComponentLoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
