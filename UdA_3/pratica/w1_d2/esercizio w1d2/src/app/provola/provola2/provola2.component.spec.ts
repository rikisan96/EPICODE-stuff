import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provola2Component } from './provola2.component';

describe('Provola2Component', () => {
  let component: Provola2Component;
  let fixture: ComponentFixture<Provola2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Provola2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Provola2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
