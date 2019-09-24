import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAudioComponent } from './media-audio.component';

describe('MediaAudioComponent', () => {
  let component: MediaAudioComponent;
  let fixture: ComponentFixture<MediaAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
