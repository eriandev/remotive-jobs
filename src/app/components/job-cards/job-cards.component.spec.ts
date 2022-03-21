import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { JobCardsComponent } from './job-cards.component';
import { JobCardComponent } from '@components/job-card/job-card.component';
import { SearchZoneComponent } from '@components/search-zone/search-zone.component';

@NgModule({
  declarations: [JobCardComponent, SearchZoneComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
class MyModule {}

describe('JobCardsComponent', () => {
  let component: JobCardsComponent;
  let fixture: ComponentFixture<JobCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobCardsComponent],
      imports: [HttpClientTestingModule, FormsModule, MyModule],
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
