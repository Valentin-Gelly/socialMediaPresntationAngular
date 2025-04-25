import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SnapComponent } from './snap/snap.component';
import { WhatsAppComponent } from './whats-app/whats-app.component';
import { InstaComponent } from './insta/insta.component';
import { TiktokComponent } from './tiktok/tiktok.component';
export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'snap', component: SnapComponent},
    {path: 'whatsapp', component: WhatsAppComponent},
    {path: 'insta', component: InstaComponent},
    {path: 'tiktok', component: TiktokComponent},
];
