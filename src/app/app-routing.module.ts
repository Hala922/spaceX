import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'rockets',
    component: RocketsComponent,
  },
  {
    path: 'detail/:rocket_id',
    component: DetailComponent,
  },

  { path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {
  curentRoute= routes;
 }
