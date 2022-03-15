import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JobCardComponent } from './components/job-card/job-card.component';
import { SearchZoneComponent } from './components/search-zone/search-zone.component';

@NgModule({
  declarations: [AppComponent, SearchZoneComponent, JobCardComponent],
  imports: [BrowserModule, FormsModule, RouterModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
