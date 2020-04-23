import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

//import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY } from '@angular/material/progress-spinner';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { RocketsComponent } from './rockets/rockets.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { ShowLoadingComponent } from './show-loading/show-loading.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RocketsComponent,
    DetailComponent, 
    AboutComponent,
   ShowLoadingComponent,
   HeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
//    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 
 }
