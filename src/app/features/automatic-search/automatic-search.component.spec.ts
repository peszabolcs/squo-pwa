import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticSearchComponent } from './automatic-search.component';

describe('AutomaticSearchComponent', () => {
  let component: AutomaticSearchComponent;
  let fixture: ComponentFixture<AutomaticSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomaticSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomaticSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
