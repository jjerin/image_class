import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassFlowersComponent } from './image-class-flowers.component';

describe('ImageClassFlowersComponent', () => {
  let component: ImageClassFlowersComponent;
  let fixture: ComponentFixture<ImageClassFlowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClassFlowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
