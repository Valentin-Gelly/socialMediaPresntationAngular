import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterModule for routing
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insta',
  standalone: true,
  templateUrl: './insta.component.html',
  styleUrls: ['../snap/snap.component.css', '../phone-home-page/phone-home-page.component.css'],
  imports: [
    CommonModule,
    RouterLink
  ],
})
export class InstaComponent {

  currentStep: number = 1;
  type: string = '';
  
  choiceReels() {
    this.type = 'reels';
    this.currentStep = 2;
    setTimeout(() => {
      this.scrollToSection(document.getElementById('message-reels-2')!);
    }, 0);
  }

  choiceStories() {
    this.type = 'stories';
    this.currentStep = 2;
    setTimeout(() => {
      this.scrollToSection(document.getElementById('message-stories-2')!);
    }, 0);
  }


  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
      // Scroll à la section actuelle si nécessaire
      setTimeout(() => {
        console.log('message-' + this.type + '-' + this.currentStep);
        this.scrollToSection(document.getElementById('message-' + this.type + '-' + this.currentStep));
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
