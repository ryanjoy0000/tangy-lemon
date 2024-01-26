import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    ToolsComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule, FontAwesomeModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
