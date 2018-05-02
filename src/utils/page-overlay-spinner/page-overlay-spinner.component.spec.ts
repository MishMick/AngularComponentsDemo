import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOverlaySpinnerComponent } from './page-overlay-spinner.component';

describe('PageOverlaySpinnerComponent', () => {
  let component: PageOverlaySpinnerComponent;
  let fixture: ComponentFixture<PageOverlaySpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOverlaySpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOverlaySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
