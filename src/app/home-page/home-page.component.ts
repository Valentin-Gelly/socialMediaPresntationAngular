import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 60000); // Update every minute
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });

    document.getElementById('time')!.textContent = `${hours}:${minutes}`;
    document.getElementById('date')!.textContent = `${day}`;
}

}
