import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavafxComponent } from './javafx.component';

describe('JavafxComponent', () => {
  let component: JavafxComponent;
  let fixture: ComponentFixture<JavafxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavafxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavafxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
