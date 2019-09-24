import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaTextConfigurationComponent } from './media-text-configuration.component';

describe('MediaTextConfigurationComponent', () => {
  let component: MediaTextConfigurationComponent;
  let fixture: ComponentFixture<MediaTextConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaTextConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTextConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
