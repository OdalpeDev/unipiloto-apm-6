import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilTeacherComponent } from './detil-teacher.component';

describe('DetilTeacherComponent', () => {
  let component: DetilTeacherComponent;
  let fixture: ComponentFixture<DetilTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
