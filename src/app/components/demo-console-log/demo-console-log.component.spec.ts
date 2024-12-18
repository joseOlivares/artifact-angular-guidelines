import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoConsoleLogComponent } from './demo-console-log.component';

describe('DemoConsoleLogComponent', () => {
  let component: DemoConsoleLogComponent;
  let fixture: ComponentFixture<DemoConsoleLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoConsoleLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoConsoleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
