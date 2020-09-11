import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassCatsDogsComponent } from './image-class-cats-dogs.component';

describe('ImageClassCatsDogsComponent', () => {
  let component: ImageClassCatsDogsComponent;
  let fixture: ComponentFixture<ImageClassCatsDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClassCatsDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassCatsDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
