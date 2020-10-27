import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchzoneComponent } from './components/searchzone/searchzone.component';
import { FilterzoneComponent } from './components/filterzone/filterzone.component';
import { JobslistComponent } from './components/jobslist/jobslist.component';
import { CardComponent } from './components/card/card.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchzoneComponent,
    FilterzoneComponent,
    JobslistComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
