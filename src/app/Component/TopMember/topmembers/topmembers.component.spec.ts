import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmembersComponent } from './topmembers.component';

describe('TopmembersComponent', () => {
  let component: TopmembersComponent;
  let fixture: ComponentFixture<TopmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
