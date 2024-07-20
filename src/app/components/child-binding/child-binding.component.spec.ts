import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBindingComponent } from './child-binding.component';

describe('ChildBindingComponent', () => {
  let component: ChildBindingComponent;
  let fixture: ComponentFixture<ChildBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
