import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CountryService } from "../country.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  countryData: any[] = [];
  subscription!: Subscription;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.subscription = this.countryService
      .getCountries()
      .subscribe((response: any) => {
        this.countryData = response;
        console.log(response);
      });
    this.countryService.getCountries();
    this.countryService.getRegions();
  }

  getAndSetRegions = () => {
    this.countryService.getRegions();
  };

  getAndSetDetailPage = (country: any): void => {
    this.countryService.getCountryDetail(country);
  };

  onSearchCountryEvent = (searchTerm: string): void => {
    this.countryService
      .searchCountries(searchTerm.toLowerCase())
      .subscribe((response: any) => {
        this.countryData = response;
      });
  };

  onSearchRegionEvent = (searchTerm: string): void => {
    this.countryService
      .searchRegions(searchTerm.toLowerCase())
      .subscribe((response: any) => {
        this.countryData = response;
      });
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
