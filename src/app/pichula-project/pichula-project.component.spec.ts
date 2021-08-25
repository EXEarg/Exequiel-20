import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PichulaProjectComponent } from './pichula-project.component';

describe('PichulaProjectComponent', () => {
  let component: PichulaProjectComponent;
  let fixture: ComponentFixture<PichulaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PichulaProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PichulaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
