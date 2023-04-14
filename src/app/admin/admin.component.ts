import { Router } from '@angular/router';
import { AuthService } from './../Services/auth.services';
import { Component } from '@angular/core';
@Component({
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/');
  }
}
