import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCollectionComponent } from './point-collection.component';

describe('PointCollectionComponent', () => {
  let component: PointCollectionComponent;
  let fixture: ComponentFixture<PointCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
