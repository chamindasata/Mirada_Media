import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMailTemplateComponent } from './media-mail-template.component';

describe('MediaMailTemplateComponent', () => {
  let component: MediaMailTemplateComponent;
  let fixture: ComponentFixture<MediaMailTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaMailTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
