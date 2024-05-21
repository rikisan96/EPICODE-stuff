import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvolaAppComponent } from './provola-app.component';

describe('ProvolaAppComponent', () => {
  let component: ProvolaAppComponent;
  let fixture: ComponentFixture<ProvolaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvolaAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvolaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
