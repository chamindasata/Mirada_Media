import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDummyComponent } from './media-dummy.component';

describe('MediaDummyComponent', () => {
  let component: MediaDummyComponent;
  let fixture: ComponentFixture<MediaDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
