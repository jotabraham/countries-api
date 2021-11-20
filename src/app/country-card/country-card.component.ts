import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-country-card",
  templateUrl: "./country-card.component.html",
  styleUrls: ["./country-card.component.css"],
})
export class CountryCardComponent implements OnInit {
  @Input() countryRef: any;
  @Output() countryDetail = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  emitCountryDetail = (country: any): void => {
    let countryName = country.name.common;
    console.log(countryName);
    this.countryDetail.emit(country);
    this.router.navigate([`country-details/${countryName}`]);
  };
}
