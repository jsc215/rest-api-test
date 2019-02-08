import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { StocksComponent } from './stocks/stocks.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    StocksComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
