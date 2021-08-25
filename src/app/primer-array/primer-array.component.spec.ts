import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerArrayComponent } from './primer-array.component';

describe('PrimerArrayComponent', () => {
  let component: PrimerArrayComponent;
  let fixture: ComponentFixture<PrimerArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
