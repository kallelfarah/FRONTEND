import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelComponent } from './hotel/hotel.component';
import { HotelSearchResultsComponent } from './hotel-search-results/hotel-search-results.component'; // Import the ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    WelcomeComponent,
    FlightSearchComponent,
    UserComponent,
    HotelComponent,
    HotelSearchResultsComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
