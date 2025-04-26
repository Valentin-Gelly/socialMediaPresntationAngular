import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { Routes } from '@angular/router';
import { SnapComponent } from './snap/snap.component';
import { WhatsAppComponent } from './whats-app/whats-app.component';
import { InstaComponent } from './insta/insta.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'snap', component: SnapComponent},
    {path: 'whatsapp', component: WhatsAppComponent},
    {path: 'insta', component: InstaComponent},
    {path: 'tiktok', component: TiktokComponent},
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }