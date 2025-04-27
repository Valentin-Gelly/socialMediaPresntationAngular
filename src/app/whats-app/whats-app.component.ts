import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-whats-app',
  standalone: true,
  templateUrl: './whats-app.component.html',
  styleUrls: ['../snap/snap.component.css', '../phone-home-page/phone-home-page.component.css'],
  imports: [
    CommonModule,
    RouterLink
  ],
})
export class WhatsAppComponent {

  currentStep: number = 1;
  type: string = '';

  choiceMessageEcrit() {
    this.type = 'ecrit';
    this.currentStep = 2;
    this.scrollToSection(document.getElementById('message-' + this.type + '-' + this.currentStep));
  }

  choiceAbreviation() {
    this.type = 'abreviation';
    this.currentStep = 2;
    this.scrollToSection(document.getElementById('message-' + this.type + '-' + this.currentStep));
  }

  choiceEmojis() {
    this.type = 'emojis';
    this.currentStep = 2;
    this.scrollToSection(document.getElementById('message-' + this.type + '-' + this.currentStep));
  }

  choiceGifs() {
    this.type = 'gifs';
    this.currentStep = 2;
    this.scrollToSection(document.getElementById('message-' + this.type + '-' + this.currentStep));
  }


  choiceAppelVideo() {
    this.type = 'appel-video';
    this.currentStep = 2;
    this.scrollToSection(document.getElementById('message-' + this.type + '-' + this.currentStep));
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
