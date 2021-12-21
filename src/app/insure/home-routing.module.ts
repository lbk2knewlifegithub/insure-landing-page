import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurePageComponent } from './containers';

const routes: Routes = [{ path: '', component: InsurePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
