import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/app.menu.component';
import { HomeComponent } from './home/app.home.component';

const routes: Routes = [

 { path:'menu/:type', component: MenuComponent},
 { path:'', component: HomeComponent},
 { path:'home', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
