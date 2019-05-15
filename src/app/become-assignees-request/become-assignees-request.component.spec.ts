import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAssigneesRequestComponent } from './become-assignees-request.component';

describe('BecomeAssigneesRequestComponent', () => {
  let component: BecomeAssigneesRequestComponent;
  let fixture: ComponentFixture<BecomeAssigneesRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeAssigneesRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAssigneesRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
