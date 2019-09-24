import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaVideoConfigurationComponent } from './media-video-configuration.component';

describe('MediaVideoConfigurationComponent', () => {
  let component: MediaVideoConfigurationComponent;
  let fixture: ComponentFixture<MediaVideoConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaVideoConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaVideoConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
