import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaImageConfigurationComponent } from './media-image-configuration.component';

describe('MediaImageConfigurationComponent', () => {
  let component: MediaImageConfigurationComponent;
  let fixture: ComponentFixture<MediaImageConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaImageConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaImageConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
