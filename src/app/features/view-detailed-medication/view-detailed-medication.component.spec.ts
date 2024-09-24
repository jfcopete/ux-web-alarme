import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailedMedicationComponent } from './view-detailed-medication.component';

describe('ViewDetailedMedicationComponent', () => {
  let component: ViewDetailedMedicationComponent;
  let fixture: ComponentFixture<ViewDetailedMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetailedMedicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailedMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
