import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityStatsComponent } from './sustainability-stats.component';

describe('SustainabilityStatsComponent', () => {
  let component: SustainabilityStatsComponent;
  let fixture: ComponentFixture<SustainabilityStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustainabilityStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainabilityStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
