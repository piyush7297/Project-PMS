import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskteammodelComponent } from './taskteammodel.component';

describe('TaskteammodelComponent', () => {
  let component: TaskteammodelComponent;
  let fixture: ComponentFixture<TaskteammodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskteammodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskteammodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
