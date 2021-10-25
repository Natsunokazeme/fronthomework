import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableconfirmComponent } from './disableconfirm.component';

describe('DisableconfirmComponent', () => {
  let component: DisableconfirmComponent;
  let fixture: ComponentFixture<DisableconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
