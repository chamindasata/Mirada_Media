import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaConfigureSetupComponent } from './media-configure-setup.component';

describe('MediaConfigureSetupComponent', () => {
  let component: MediaConfigureSetupComponent;
  let fixture: ComponentFixture<MediaConfigureSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaConfigureSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaConfigureSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
