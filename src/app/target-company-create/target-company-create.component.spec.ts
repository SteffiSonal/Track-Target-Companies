import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCompanyCreateComponent } from './target-company-create.component';

describe('TargetCompanyCreateComponent', () => {
  let component: TargetCompanyCreateComponent;
  let fixture: ComponentFixture<TargetCompanyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetCompanyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCompanyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
