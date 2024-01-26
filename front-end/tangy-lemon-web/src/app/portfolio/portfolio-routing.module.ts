import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const portfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(portfolioRoutes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
