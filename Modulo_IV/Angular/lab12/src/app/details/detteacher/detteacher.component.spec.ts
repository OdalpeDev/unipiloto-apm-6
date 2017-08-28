import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetteacherComponent } from './detteacher.component';

describe('DetteacherComponent', () => {
  let component: DetteacherComponent;
  let fixture: ComponentFixture<DetteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
