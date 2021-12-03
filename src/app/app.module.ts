import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DifferentComponent } from './pages/home/different/different.component';
import { DifferentCardComponent } from './pages/home/different/diffrent-card/different-card.component';
import { HomeComponent } from './pages/home/home.component';
import { HowWeWorkComponent } from './pages/home/how-we-work/how-we-work.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModelNgContentModule } from './shared/components/modal-ng-content/model-ng-content.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    IntroComponent,
    DifferentComponent,
    DifferentCardComponent,
    HowWeWorkComponent,
  ],
  imports: [BrowserModule, ModelNgContentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
