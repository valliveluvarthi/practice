import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableroomsComponent } from './availablerooms.component';

describe('AvailableroomsComponent', () => {
  let component: AvailableroomsComponent;
  let fixture: ComponentFixture<AvailableroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
