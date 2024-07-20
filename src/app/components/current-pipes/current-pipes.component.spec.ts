import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPipesComponent } from './current-pipes.component';

describe('CurrentPipesComponent', () => {
  let component: CurrentPipesComponent;
  let fixture: ComponentFixture<CurrentPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
