import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DebounceClickDirective } from './debounce-click.directive';


@NgModule({
  declarations: [AppComponent, SideNavComponent, TopNavComponent, SignUpComponent, SignInComponent, HomeComponent, AboutComponent, ServicesComponent, ClientsComponent, ContactComponent, PageNotFoundComponent, DebounceClickDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
