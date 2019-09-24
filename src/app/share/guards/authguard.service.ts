import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate  {

  constructor( private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let token=localStorage.getItem("Access_token");
    
    if (token) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/page/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
