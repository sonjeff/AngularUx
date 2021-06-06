import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiligenceInformationComponent } from './diligence-information.component';

describe('DiligenceInformationComponent', () => {
  let component: DiligenceInformationComponent;
  let fixture: ComponentFixture<DiligenceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiligenceInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiligenceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
