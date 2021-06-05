import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingInformationComponent } from './housing-information.component';

describe('HousingInformationComponent', () => {
  let component: HousingInformationComponent;
  let fixture: ComponentFixture<HousingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
