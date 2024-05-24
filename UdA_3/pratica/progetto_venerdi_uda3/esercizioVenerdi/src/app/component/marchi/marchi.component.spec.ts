import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchiComponent } from './marchi.component';

describe('MarchiComponent', () => {
  let component: MarchiComponent;
  let fixture: ComponentFixture<MarchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarchiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
