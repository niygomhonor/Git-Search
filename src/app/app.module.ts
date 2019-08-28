import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search-form/search/search.component';
import { HomeComponent } from './Home-page/home/home.component';
import { NavBarComponent } from './Nav-bar/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
