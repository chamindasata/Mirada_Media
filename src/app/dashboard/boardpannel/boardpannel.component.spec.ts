import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardpannelComponent } from './boardpannel.component';

describe('BoardpannelComponent', () => {
  let component: BoardpannelComponent;
  let fixture: ComponentFixture<BoardpannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardpannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
