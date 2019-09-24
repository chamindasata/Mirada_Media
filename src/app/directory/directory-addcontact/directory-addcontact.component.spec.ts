import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryAddcontactComponent } from './directory-addcontact.component';

describe('DirectoryAddcontactComponent', () => {
  let component: DirectoryAddcontactComponent;
  let fixture: ComponentFixture<DirectoryAddcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryAddcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryAddcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
