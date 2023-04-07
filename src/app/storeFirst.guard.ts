import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Home } from './home/home.component';
@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != Home) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
