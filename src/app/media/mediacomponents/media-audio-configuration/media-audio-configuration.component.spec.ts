import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAudioConfigurationComponent } from './media-audio-configuration.component';

describe('MediaAudioConfigurationComponent', () => {
  let component: MediaAudioConfigurationComponent;
  let fixture: ComponentFixture<MediaAudioConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAudioConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAudioConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
