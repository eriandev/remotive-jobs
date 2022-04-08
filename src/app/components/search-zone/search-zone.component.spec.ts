import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchZoneComponent } from './search-zone.component';
import { JobCardComponent } from '@components/job-card/job-card.component';
import { JobCardsComponent } from '@components/job-cards/job-cards.component';

@NgModule({
  declarations: [JobCardComponent, JobCardsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
class MyModule {}

describe('SearchZoneComponent', () => {
  let component: SearchZoneComponent;
  let fixture: ComponentFixture<SearchZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchZoneComponent],
      imports: [MyModule],
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
