import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSocialSetupComponent } from './media-social-setup.component';

describe('MediaSocialSetupComponent', () => {
  let component: MediaSocialSetupComponent;
  let fixture: ComponentFixture<MediaSocialSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSocialSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSocialSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
