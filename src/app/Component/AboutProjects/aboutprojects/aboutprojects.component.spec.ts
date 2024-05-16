import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutprojectsComponent } from './aboutprojects.component';

describe('AboutprojectsComponent', () => {
  let component: AboutprojectsComponent;
  let fixture: ComponentFixture<AboutprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
