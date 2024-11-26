import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteeperComponent } from './steeper.component';

describe('SteeperComponent', () => {
  let component: SteeperComponent;
  let fixture: ComponentFixture<SteeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteeperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
