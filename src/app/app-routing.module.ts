import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CanLoadVideoModule } from "./can-load-module.service";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

let routes:Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: 'video',
        loadChildren: ()=>import('./video/video.module').then(m=>m.VideoModule),
        canLoad: [CanLoadVideoModule]
    },
    {
        path: '**',
        component:NotFoundComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}