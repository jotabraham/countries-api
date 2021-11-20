import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CountryService {
  countryURL: string = "https://restcountries.com/v3.1/all";
  countrySearchURL: string = "https://restcountries.com/v3.1/name/";
  regionSearchURL: string = "https://restcountries.com/v3.1/region/";
  borderCountryURL: string = "https://restcountries.com/v3.1/alpha/";
  countries: any;
  countryDetail: any;
  regions: any;

  constructor(private http: HttpClient) {}

  getCountries = (): any => {
    this.countries = this.http.get(this.countryURL);
    return this.countries;
  };

  getRegions = (): string[] => {
    const regionsArray: string[] = [];
    this.countries.forEach((country: any) => {
      for (const obj in country) {
        const region: string = country[obj].region;
        if (!regionsArray.includes(region)) {
          regionsArray.push(region);
        }
      }
      // console.log(regionsArray);
    });
    return regionsArray;
  };

  searchCountries = (searchTerm: string): any => {
    return this.http.get(this.countrySearchURL + searchTerm);
  };

  searchRegions = (searchTerm: string): any => {
    return this.http.get(this.regionSearchURL + searchTerm);
  };

  getCountryDetail = (country: any): void => {
    this.countryDetail = country;
  };

  getDetailsPage = (): any => {
    return this.countryDetail;
  };

  navToBorderCountries = (code: string) => {
    return this.http.get(this.borderCountryURL + code);
  };
}
