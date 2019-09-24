import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailListComponent } from './edit-email-list.component';

describe('EditEmailListComponent', () => {
  let component: EditEmailListComponent;
  let fixture: ComponentFixture<EditEmailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
