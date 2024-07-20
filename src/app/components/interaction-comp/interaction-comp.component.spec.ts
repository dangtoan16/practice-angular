import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionCompComponent } from './interaction-comp.component';

describe('InteractionCompComponent', () => {
  let component: InteractionCompComponent;
  let fixture: ComponentFixture<InteractionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
