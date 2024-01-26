import { Component } from '@angular/core';
import {
  faGolang,
  faAngular,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
  faGolang = faGolang;
  faAngular = faAngular;
  faNodeJs = faNodeJs;
  faTools = faScrewdriverWrench;
}
