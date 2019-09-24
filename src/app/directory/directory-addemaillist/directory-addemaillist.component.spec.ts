import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryAddemaillistComponent } from './directory-addemaillist.component';

describe('DirectoryAddemaillistComponent', () => {
  let component: DirectoryAddemaillistComponent;
  let fixture: ComponentFixture<DirectoryAddemaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryAddemaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryAddemaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
