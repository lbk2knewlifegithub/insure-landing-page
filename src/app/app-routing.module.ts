import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'insure',
    loadChildren: () => import('./insure/home.module').then((m) => m.InsureModule),
  },
  {
    path: '',
    redirectTo: '/insure',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
