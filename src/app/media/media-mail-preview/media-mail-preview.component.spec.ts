import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMailPreviewComponent } from './media-mail-preview.component';

describe('MediaMailPreviewComponent', () => {
  let component: MediaMailPreviewComponent;
  let fixture: ComponentFixture<MediaMailPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaMailPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMailPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
