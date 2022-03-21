import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { JobCardComponent } from './job-card.component';
import { RelativeDatePipe } from '../../pipes/relative-date.pipe';
import { LocationIconPipe } from '../../pipes/location-icon.pipe';
import { JobCardsComponent } from '@components/job-cards/job-cards.component';
import { SearchZoneComponent } from '@components/search-zone/search-zone.component';

@NgModule({
  declarations: [JobCardsComponent, SearchZoneComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
class MyModule {}

describe('JobCardComponent', () => {
  let component: JobCardComponent;
  let fixture: ComponentFixture<JobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobCardComponent, RelativeDatePipe, LocationIconPipe],
      imports: [FormsModule, MyModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
