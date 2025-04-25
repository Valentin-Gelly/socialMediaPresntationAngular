import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'socialMediaPresentation';

  
  
  ngOnInit() {
    setInterval(() => this.updateTime(), 1000);
    this.updateTime();
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

