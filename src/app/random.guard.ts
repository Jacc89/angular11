import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements  CanActivate {

  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const numAleatorio = Math.random();
      console.log(numAleatorio);
      if (numAleatorio > 0.4) {
        return true;
      } else {
        return false;
      }
     
    }  
}
