import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-snap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './snap.component.html',
  styleUrls: ['../phone-home-page/phone-home-page.component.css', './snap.component.css'],
})

export class SnapComponent {
  currentStep: number = 1;
  type: string = '';



  choiceVocal() {
    this.type = 'vocal';
    this.currentStep = 2;
    setTimeout(() => {
      this.scrollToSection(document.getElementById('message-vocal-2')!);
    }, 0);
  }

  choicePhoto() {
    this.type = 'photo';
    this.currentStep = 2;
    setTimeout(() => {
      this.scrollToSection(document.getElementById('message-photo-2')!);
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
