import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tiktok',
  standalone: true,
  templateUrl: './tiktok.component.html',
  styleUrls: ['../snap/snap.component.css', '../phone-home-page/phone-home-page.component.css'],
  imports: [
    CommonModule,
    RouterLink
  ],
})
export class TiktokComponent {

  currentStep: number = 1;


  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
      // Scroll à la section actuelle si nécessaire
      setTimeout(() => {
        this.scrollToSection(document.getElementById('message-reels-'+this.currentStep));
      }, 100);
    }
  }

  restart() {
    this.currentStep = 1;
  }

  scrollToSection(section: HTMLElement | null) {
    if (section) {
      document.getElementsByTagName('nav')[0].style.display = 'none';
      section.scrollIntoView({ behavior: 'smooth' });
  
      setTimeout(() => {
        document.body.classList.remove('disable-hover');
      }, 500); // le temps du scroll en ms
      document.getElementsByTagName('nav')[0].style.display = 'block';
    
    }
  }
  
}
