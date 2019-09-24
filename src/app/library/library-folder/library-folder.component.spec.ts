import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryFolderComponent } from './library-folder.component';

describe('LibraryFolderComponent', () => {
  let component: LibraryFolderComponent;
  let fixture: ComponentFixture<LibraryFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
