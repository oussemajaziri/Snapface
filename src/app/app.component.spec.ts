import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component : AppComponent;
  beforeEach(async () => {
    component = new AppComponent()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
