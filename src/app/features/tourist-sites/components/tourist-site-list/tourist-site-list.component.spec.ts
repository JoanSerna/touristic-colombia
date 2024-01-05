import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristSiteListComponent } from './tourist-site-list.component';

describe('TouristSiteListComponent', () => {
  let component: TouristSiteListComponent;
  let fixture: ComponentFixture<TouristSiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouristSiteListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouristSiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
