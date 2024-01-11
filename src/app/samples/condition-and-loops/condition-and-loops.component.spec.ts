import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionAndLoopsComponent } from './condition-and-loops.component';

describe('ConditionAndLoopsComponent', () => {
  let component: ConditionAndLoopsComponent;
  let fixture: ComponentFixture<ConditionAndLoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionAndLoopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionAndLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
