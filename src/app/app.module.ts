import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JobCardComponent } from './components/job-card/job-card.component';
import { SearchZoneComponent } from './components/search-zone/search-zone.component';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { LocationIconPipe } from './pipes/location-icon.pipe';
import { JobCardsComponent } from './components/job-cards/job-cards.component';

@NgModule({
  declarations: [AppComponent, SearchZoneComponent, JobCardComponent, RelativeDatePipe, LocationIconPipe, JobCardsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
