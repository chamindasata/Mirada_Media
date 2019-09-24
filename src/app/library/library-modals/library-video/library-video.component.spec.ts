import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryVideoComponent } from './library-video.component';

describe('LibraryVideoComponent', () => {
  let component: LibraryVideoComponent;
  let fixture: ComponentFixture<LibraryVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
