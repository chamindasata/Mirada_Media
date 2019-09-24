import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaShareSetupComponent } from './media-share-setup.component';

describe('MediaShareSetupComponent', () => {
  let component: MediaShareSetupComponent;
  let fixture: ComponentFixture<MediaShareSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaShareSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaShareSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
