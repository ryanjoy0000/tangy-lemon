import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: 'author',
    loadChildren: async () =>
      (await import('./portfolio/portfolio.module')).PortfolioModule,
  },
  {
    path: '',
    redirectTo: '/author',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
