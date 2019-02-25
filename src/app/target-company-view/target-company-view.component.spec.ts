import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCompanyViewComponent } from './target-company-view.component';

describe('TargetCompanyViewComponent', () => {
  let component: TargetCompanyViewComponent;
  let fixture: ComponentFixture<TargetCompanyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetCompanyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
