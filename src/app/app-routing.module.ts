import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';
import { SearchComponent } from './search-form/search/search.component';

const routes: Routes = [
  {path:'profiles/:name', component:ProfileComponent},
  {path:"repository/:reposit" ,component:RepositoryComponent},
  {path:'',redirectTo:"/profiles",pathMatch:"full"},
  {path:"**",component:ProfileComponent},
  {path:'search', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
