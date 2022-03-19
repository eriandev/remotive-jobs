import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchZoneComponent } from './search-zone.component';
import { JobCardComponent } from '@components/job-card/job-card.component';
import { JobCardsComponent } from '@components/job-cards/job-cards.component';

describe('SearchZoneComponent', () => {
  let component: SearchZoneComponent;
  let fixture: ComponentFixture<SearchZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchZoneComponent, JobCardComponent, JobCardsComponent],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
