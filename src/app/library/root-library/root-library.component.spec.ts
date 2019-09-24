import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootLibraryComponent } from './root-library.component';

describe('RootLibraryComponent', () => {
  let component: RootLibraryComponent;
  let fixture: ComponentFixture<RootLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
