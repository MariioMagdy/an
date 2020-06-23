import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(): boolean | Observable<boolean> {
    var token = localStorage.getItem('TOKEN');
    if (token) {
      return true
    }
    else {
      this._Router.navigateByUrl("/signin")
      return false
    }
  }


  constructor(public _Router: Router) { }
}

