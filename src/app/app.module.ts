import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SearchZoneComponent } from './components/search-zone/search-zone.component';

@NgModule({
  declarations: [AppComponent, SearchZoneComponent],
  imports: [BrowserModule, FormsModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
