import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
