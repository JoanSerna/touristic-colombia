import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristSiteItemComponent } from './tourist-site-item.component';

describe('TouristSiteItemComponent', () => {
  let component: TouristSiteItemComponent;
  let fixture: ComponentFixture<TouristSiteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouristSiteItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouristSiteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
