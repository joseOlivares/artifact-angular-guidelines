import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentesReutilizablesComponent } from './demo-componentes-reutilizables.component';

describe('DemoComponentesReutilizablesComponent', () => {
  let component: DemoComponentesReutilizablesComponent;
  let fixture: ComponentFixture<DemoComponentesReutilizablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoComponentesReutilizablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComponentesReutilizablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
