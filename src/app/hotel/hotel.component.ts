import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  searchForm: any = {}; // This object will hold the form data
  searchResult: any;
  constructor(private http: HttpClient, private router: Router) {}


  // Function to handle form submission

  searchHotels() {
    const url = `http://localhost:8089/hotels/search`;
    const queryParams = `?arrivalDate=${this.searchForm.arrivalDate}&departureDate=${this.searchForm.departureDate}&adults=${this.searchForm.adults}&roomQty=${this.searchForm.roomQty}`;

    this.http.get<any>(url + queryParams).subscribe(
      (response) => {
        console.log('Hotel search result*************:', response);
        this.searchResult = response;
        this.router.navigate(['/hotel-search-results'], { state: { data: this.searchResult } });
      },
      (error) => {
        console.error('Error occurred:', error);
        // Handle error responses
      }
    );
  }
}

