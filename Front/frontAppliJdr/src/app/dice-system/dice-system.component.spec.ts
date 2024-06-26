import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSystemComponent } from './dice-system.component';

describe('DiceSystemComponent', () => {
  let component: DiceSystemComponent;
  let fixture: ComponentFixture<DiceSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
