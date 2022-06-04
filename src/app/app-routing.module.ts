import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: "", redirectTo: 'search', pathMatch: 'full' },
  { path:"search",component:SearchComponent},
  
  { path: "userdetail", component:UserDetailsComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
