import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLineupComponent } from './media-lineup.component';

describe('MediaLineupComponent', () => {
  let component: MediaLineupComponent;
  let fixture: ComponentFixture<MediaLineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaLineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
