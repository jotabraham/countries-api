import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryCardComponent } from "./country-card/country-card.component";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "country-card", component: CountryCardComponent },
  { path: "country-details/:country", component: CountryDetailsComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
