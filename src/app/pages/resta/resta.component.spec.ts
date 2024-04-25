import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaComponent } from './resta.component';

describe('RestaComponent', () => {
  let component: RestaComponent;
  let fixture: ComponentFixture<RestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
