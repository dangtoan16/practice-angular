import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBindingComponent } from './parent-binding.component';

describe('ParentBindingComponent', () => {
  let component: ParentBindingComponent;
  let fixture: ComponentFixture<ParentBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
