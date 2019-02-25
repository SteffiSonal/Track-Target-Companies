import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCompaniesListComponent } from './target-companies-list.component';

describe('TargetCompaniesListComponent', () => {
  let component: TargetCompaniesListComponent;
  let fixture: ComponentFixture<TargetCompaniesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetCompaniesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
