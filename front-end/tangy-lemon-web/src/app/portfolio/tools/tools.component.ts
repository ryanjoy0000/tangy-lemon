import { Component } from '@angular/core';
import {
  faGolang,
  faAngular,
  faNodeJs,
  faGithub,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
  faGolang = faGolang;
  faAngular = faAngular;
  faNodeJs = faNodeJs;
}
