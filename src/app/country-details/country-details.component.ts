import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CountryService } from "../country.service";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"],
})
export class CountryDetailsComponent implements OnInit {
  country: any;
  hasBorderCountries = false;
  borderCountries: string[] = [];

  constructor(
    private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.country = this.countryService.countryDetail;
    console.log(this.country);
    this.getLanguages();
    this.confirmBorderCountries();
  }

  getLanguages = (): any => {
    const countryLangs = this.country.languages;
    const languages: string[] = [];
    for (const language in countryLangs) {
      languages.push(countryLangs[language]);
    }
    return languages.join(", ");
  };

  confirmBorderCountries = () => {
    this.borderCountries = this.country.borders;
    if (this.borderCountries) {
      this.hasBorderCountries = true;
    }

    // this.borderCountries.forEach((borderCountry) => {
    //   let borderNames: string[] = [];
    //   console.log(this.countryService.countries);
    //   // this.countryService.countries.find((country: any) => {
    //   //   let foundCountry = country.cioc === borderCountry;
    //   //   console.log(foundCountry);
    //   //   // if (borderCountry === country.name.common) {
    //   //   // }
    //   // });
    // });
  };

  onNavToBorderCountries = (countryCode: string) => {
    this.countryService.navToBorderCountries(countryCode);
    console.log("navigating");
  };

  onBackToCountries = () => {
    this.router.navigate(["/home"]);
  };
}
