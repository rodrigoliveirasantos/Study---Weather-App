import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardInfoComponent } from './weather-card-info.component';

describe('WeatherCardInfoComponent', () => {
  let component: WeatherCardInfoComponent;
  let fixture: ComponentFixture<WeatherCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
