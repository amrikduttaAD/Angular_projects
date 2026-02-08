import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StDirComponent } from './st-dir.component';

describe('StDirComponent', () => {
  let component: StDirComponent;
  let fixture: ComponentFixture<StDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
