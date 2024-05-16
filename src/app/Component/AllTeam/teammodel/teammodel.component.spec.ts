import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammodelComponent } from './teammodel.component';

describe('TeammodelComponent', () => {
  let component: TeammodelComponent;
  let fixture: ComponentFixture<TeammodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeammodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
