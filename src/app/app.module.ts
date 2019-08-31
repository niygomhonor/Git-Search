import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search-form/search/search.component';
import { NavBarComponent } from './Nav-bar/nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DecorationDirective } from './decoration.directive';
import { DateCountPipe } from './date-count.pipe';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import{GitHttpService} from 'src/app/service/git-http.service'
import { RepositoryComponent } from './repository/repository.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    
    NavBarComponent,
    NotFoundComponent,
    DecorationDirective,
    DateCountPipe,
    ProfileComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
  ],
  providers: [GitHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
