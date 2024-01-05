import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristSiteItemSkeletonComponent } from './tourist-site-item-skeleton.component';

describe('TouristSiteItemSkeletonComponent', () => {
  let component: TouristSiteItemSkeletonComponent;
  let fixture: ComponentFixture<TouristSiteItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouristSiteItemSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouristSiteItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
