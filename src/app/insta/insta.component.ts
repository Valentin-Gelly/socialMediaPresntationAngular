import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-insta',
  standalone: true,
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css', '../phone-home-page/phone-home-page.component.css', '../snap/snap.component.css'],
  imports: [
    RouterLink
  ],
})
export class InstaComponent {

}
