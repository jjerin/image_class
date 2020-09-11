import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassAnimalsComponent } from './image-class-animals.component';

describe('ImageClassAnimalsComponent', () => {
  let component: ImageClassAnimalsComponent;
  let fixture: ComponentFixture<ImageClassAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClassAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
