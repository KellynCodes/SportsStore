import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css'],
})
export class pageNotFound {
  title = '404';
  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigateByUrl('/home');
  }
}
