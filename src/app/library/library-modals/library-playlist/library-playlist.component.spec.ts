import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryPlaylistComponent } from './library-playlist.component';

describe('LibraryPlaylistComponent', () => {
  let component: LibraryPlaylistComponent;
  let fixture: ComponentFixture<LibraryPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
