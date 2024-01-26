import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(@Inject(DOCUMENT) private doc: Document) {}
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMob = faMobileScreen;

  socialMedia = {
    LINKEDIN: 'https://www.linkedin.com/in/ryanjoy0000',
    GITHUB: 'https://github.com/ryanjoy0000',
  };

  iconClicked(ev: Event, icon = '') {
    if (ev) {
      ev.preventDefault();
    }
    switch (icon) {
      case 'faLinkedin':
        this.doc.location.href = this.socialMedia.LINKEDIN;
        break;
      case 'faGithub':
        this.doc.location.href = this.socialMedia.GITHUB;
        break;

      default:
        break;
    }
  }
}
