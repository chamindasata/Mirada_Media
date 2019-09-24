import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaManagePageComponent } from './media-manage-page.component';

describe('MediaManagePageComponent', () => {
  let component: MediaManagePageComponent;
  let fixture: ComponentFixture<MediaManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
