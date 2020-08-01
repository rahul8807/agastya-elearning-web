import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { NavComponent } from './nav/nav.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BannerComponent } from './pages/banner/banner.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { IntroOverlayComponent } from './pages/intro-overlay/intro-overlay.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ClickOutsideDirective } from './utility/click-outside.directive';
import { ArrowLeftComponent } from './svg/arrow-left/arrow-left.component';
import { ArrowRightComponent } from './svg/arrow-right/arrow-right.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    NavComponent,
    SearchPageComponent,
    LandingPageComponent,
    AboutusPageComponent,
    CourseDetailPageComponent,
    PageNotFoundComponent,
    BannerComponent,
    FeaturedComponent,
    IntroOverlayComponent,
    ClickOutsideDirective,
    ArrowLeftComponent,
    ArrowRightComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    NgbModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
