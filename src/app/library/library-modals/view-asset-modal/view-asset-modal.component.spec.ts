import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetModalComponent } from './view-asset-modal.component';

describe('ViewAssetModalComponent', () => {
  let component: ViewAssetModalComponent;
  let fixture: ComponentFixture<ViewAssetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
