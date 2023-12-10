import { Component } from '@angular/core';
import { PHONE_NUMBER } from "../../constants";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  protected readonly PHONE_NUMBER = PHONE_NUMBER;

  constructor(
    private router: Router
  ) {
  }

  test() {
    console.log('test');
    this.router.navigate([], { fragment: 'testimonials' })
  }
}
