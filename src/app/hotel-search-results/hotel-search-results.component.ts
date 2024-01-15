import { Component ,Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hotel-search-results',
  templateUrl: './hotel-search-results.component.html',
  styleUrls: ['./hotel-search-results.component.css']
})
export class HotelSearchResultsComponent implements OnInit {
  resultData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.resultData = history.state.data;
    console.log('Result Data received:', this.resultData);
  }}
