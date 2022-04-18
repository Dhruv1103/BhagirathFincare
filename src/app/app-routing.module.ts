import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AssociateComponent } from './associate/associate.component';
import { CareerComponent } from './career/career.component';
import { CommisionComponent } from './commision/commision.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FinplanningComponent } from './finplanning/finplanning.component';
// import { ConnectComponent } from './connect/connect.component';
// import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HotstockComponent } from './hotstock/hotstock.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';
import { ProductsComponent } from './products/products.component';
import { TestimonialComponent } from './testimonial/testimonial.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'navigation',component:NavigationComponent},
  {path: 'home',component:HomeComponent},
  // {path: 'content',component:ContentComponent},
  // {path: 'connect',component:ConnectComponent},
  {path: 'testimonial',component:TestimonialComponent },
  {path: 'footer',component:FooterComponent},
  {path: 'AboutUs',component:AboutUsComponent},
  {path: 'Advertisement',component:AdvertisementComponent },
  
  {path: 'about-us',component:AboutUsComponent},
  {path: 'navigation',component:NavigationComponent},
  {path: 'login-signup',component:LoginSignupComponent},
  {path: 'contact-us',component:ContactUsComponent},
  {path: 'career',component:CareerComponent},
  {path: 'products',component:ProductsComponent},
  {path: 'finplanning',component:FinplanningComponent},
  {path:'hotstock',component:HotstockComponent},
  {path:'paymentdetail',component:PaymentdetailComponent},
  {path:'associate',component:AssociateComponent},
  {path:'commision',component:CommisionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
