import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd15HttpClientComponentComponent } from './vd15-http-client-component.component';

describe('Vd15HttpClientComponentComponent', () => {
  let component: Vd15HttpClientComponentComponent;
  let fixture: ComponentFixture<Vd15HttpClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vd15HttpClientComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd15HttpClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
