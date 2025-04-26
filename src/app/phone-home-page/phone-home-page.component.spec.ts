import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneHomePageComponent } from './phone-home-page.component';

describe('PhoneHomePageComponent', () => {
  let component: PhoneHomePageComponent;
  let fixture: ComponentFixture<PhoneHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
