import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';

import { AppComponent } from './app.component';
import { SearchzoneComponent } from './components/searchzone/searchzone.component';
import { FilterzoneComponent } from './components/filterzone/filterzone.component';
import { JobslistComponent } from './components/jobslist/jobslist.component';
import { CardComponent } from './components/card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { RelativeDatePipe } from './pipes/relative-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    SearchzoneComponent,
    FilterzoneComponent,
    JobslistComponent,
    CardComponent,
    RelativeDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
