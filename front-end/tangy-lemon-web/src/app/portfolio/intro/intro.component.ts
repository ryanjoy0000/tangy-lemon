import { Component } from '@angular/core';
import { faCaretDown, faHand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  faCaretDown = faCaretDown;
  faHand = faHand;
}
