import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provola3Component } from './provola3.component';

describe('Provola3Component', () => {
  let component: Provola3Component;
  let fixture: ComponentFixture<Provola3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Provola3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Provola3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
