import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanLoad, Route, Router, UrlSegment } from "@angular/router";
import {map} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class CanLoadVideoModule implements CanLoad {
    isLoggedIn!: boolean;
    constructor(private auth:AngularFireAuth, private router:Router) {}
    canLoad(route: Route, segments: UrlSegment[]) {
        this.auth.user.pipe(map((data)=>!!data)).subscribe(data=>this.isLoggedIn = data);
        if(!this.isLoggedIn) this.router.navigate(['/not-found']);
        return Promise.resolve(this.isLoggedIn);
    }
}