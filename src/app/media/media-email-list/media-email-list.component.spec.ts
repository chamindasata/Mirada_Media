import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaEmailListComponent } from './media-email-list.component';

describe('MediaEmailListComponent', () => {
  let component: MediaEmailListComponent;
  let fixture: ComponentFixture<MediaEmailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaEmailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaEmailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
