import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputOutputCompComponent } from './app-input-output-comp.component';

describe('AppInputOutputCompComponent', () => {
  let component: AppInputOutputCompComponent;
  let fixture: ComponentFixture<AppInputOutputCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInputOutputCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInputOutputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
