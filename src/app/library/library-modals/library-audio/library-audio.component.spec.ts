import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAudioComponent } from './library-audio.component';

describe('LibraryAudioComponent', () => {
  let component: LibraryAudioComponent;
  let fixture: ComponentFixture<LibraryAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
