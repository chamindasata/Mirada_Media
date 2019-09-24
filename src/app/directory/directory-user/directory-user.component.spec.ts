import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryUserComponent } from './directory-user.component';

describe('DirectoryUserComponent', () => {
  let component: DirectoryUserComponent;
  let fixture: ComponentFixture<DirectoryUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
