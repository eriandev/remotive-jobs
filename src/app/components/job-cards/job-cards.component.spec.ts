import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { JobCardsComponent } from './job-cards.component';
import { JobCardComponent } from '@components/job-card/job-card.component';
import { SearchZoneComponent } from '@components/search-zone/search-zone.component';

describe('JobCardsComponent', () => {
  let component: JobCardsComponent;
  let fixture: ComponentFixture<JobCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobCardsComponent, JobCardComponent, SearchZoneComponent],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
