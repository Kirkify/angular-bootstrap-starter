import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IntroComponent } from "./components/intro/intro.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { ServicesComponent } from "./components/services/services.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FaqComponent } from "./components/faq/faq.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BackToTopComponent } from "./components/back-to-top/back-to-top.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, NavbarComponent, IntroComponent, CompaniesComponent, ServicesComponent, TestimonialsComponent, FaqComponent, PortfolioComponent, ContactComponent, FooterComponent, BackToTopComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-bootstrap-starter';
}
