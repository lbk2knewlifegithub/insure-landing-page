import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FeaturePreviewComponent,
  FeatureListComponent,
  HowWeWorkComponent,
  IntroComponent
} from './components';
import { InsurePageComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';

const COMPONENTS = [
  IntroComponent,
  HowWeWorkComponent,
  FeaturePreviewComponent,
  FeatureListComponent,
];

const CONTAINERS = [InsurePageComponent];

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class InsureModule {

}
