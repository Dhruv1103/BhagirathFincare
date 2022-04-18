import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

import { AdvertisementComponent } from './advertisement/advertisement.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { ProductsComponent } from './products/products.component';
import { FinplanningComponent } from './finplanning/finplanning.component';
import { HotstockComponent } from './hotstock/hotstock.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';
import { AssociateComponent } from './associate/associate.component';
import { CommisionComponent } from './commision/commision.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    TestimonialComponent,
    AboutUsComponent,
    HomeComponent,
  
    AdvertisementComponent,
    LoginSignupComponent,
    ContactUsComponent,
    CareerComponent,
    ProductsComponent,
    FinplanningComponent,
    HotstockComponent,
    PaymentdetailComponent,
    AssociateComponent,
    CommisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
