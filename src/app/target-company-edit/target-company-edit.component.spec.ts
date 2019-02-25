import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCompanyEditComponent } from './target-company-edit.component';

describe('TargetCompanyEditComponent', () => {
  let component: TargetCompanyEditComponent;
  let fixture: ComponentFixture<TargetCompanyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetCompanyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
