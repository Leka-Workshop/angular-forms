import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFeatureComponent } from './starter-feature.component';

describe('StarterFeatureComponent', () => {
  let component: StarterFeatureComponent;
  let fixture: ComponentFixture<StarterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarterFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
