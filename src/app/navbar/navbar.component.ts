import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './navbar.component.html',
  selector: 'navbar',
})
export class Navbar {
  home: string = '/home';
  store: string = '/store';
  blog: string = '/blog';
  cart: string = '/cart';
  faqs: string = '/faqs';

  constructor(private router: Router) {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
