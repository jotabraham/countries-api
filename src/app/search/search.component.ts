import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchCountryEvent = new EventEmitter<string>();
  @Output() searchRegionEvent = new EventEmitter<string>();
  regionsDropdown:string[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  // ATTN:ISSUE - after input page needs to load full array again

  // ATTN:FIX - have entering one input clear the other

  // ATTN:onClear - virtually useless...

  ngOnInit(): void {
    this.regionsDropdown = this.countryService.getRegions();
    console.log(this.regionsDropdown);
  }

  emitSearch = (form: NgForm) => {
    console.log(form);
    const country:string = form.form.value.countryName;
    const region:string = form.form.value.region;
    console.log('country: ' + country);
    console.log('region: ' + region);
    if (country) {
      this.searchCountryEvent.emit(country);
    }
    if (region) {
      this.searchRegionEvent.emit(region);
    }
  };

  onClear = (form: NgForm):void => {
    form.reset(); 
  }
}
