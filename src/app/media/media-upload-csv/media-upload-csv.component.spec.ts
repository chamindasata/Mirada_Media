import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUploadCsvComponent } from './media-upload-csv.component';

describe('MediaUploadCsvComponent', () => {
  let component: MediaUploadCsvComponent;
  let fixture: ComponentFixture<MediaUploadCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaUploadCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaUploadCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
