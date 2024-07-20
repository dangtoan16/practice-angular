import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInDirectivesExampleComponent } from './built-in-directives-example.component';

describe('BuiltInDirectivesExampleComponent', () => {
  let component: BuiltInDirectivesExampleComponent;
  let fixture: ComponentFixture<BuiltInDirectivesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInDirectivesExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInDirectivesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
