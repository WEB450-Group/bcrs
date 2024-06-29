import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRepareComponent } from './service-repare.component';

describe('ServiceRepareComponent', () => {
  let component: ServiceRepareComponent;
  let fixture: ComponentFixture<ServiceRepareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceRepareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
