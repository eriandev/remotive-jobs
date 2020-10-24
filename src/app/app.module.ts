import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchzoneComponent } from './components/searchzone/searchzone.component';
import { FilterzoneComponent } from './components/filterzone/filterzone.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchzoneComponent,
    FilterzoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
