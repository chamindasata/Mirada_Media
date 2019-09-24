import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryAddnewcompanyComponent } from './directory-addnewcompany.component';

describe('DirectoryAddnewcompanyComponent', () => {
  let component: DirectoryAddnewcompanyComponent;
  let fixture: ComponentFixture<DirectoryAddnewcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryAddnewcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryAddnewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
