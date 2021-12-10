import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DifferentCardComponent,
  DifferentListComponent,
  HowWeWorkComponent,
  IntroComponent
} from './components';
import { HomePageComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';

const COMPONENTS = [
  IntroComponent,
  HowWeWorkComponent,
  DifferentCardComponent,
  DifferentListComponent,
];

const CONTAINERS = [HomePageComponent];

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [COMPONENTS, CONTAINERS],
  declarations: [COMPONENTS, CONTAINERS],
})
export class HomeModule {

}
