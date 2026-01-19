import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faGithub,
  faHtml5, faJira,
  faJs,
  faReact
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  imports: [FontAwesomeModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly faHtml5 = faHtml5;
  protected readonly faAngular = faAngular;
  protected readonly faDocker = faDocker;
  protected readonly faGithub = faGithub;
  protected readonly faJs = faJs;
  protected readonly faCss3Alt = faCss3Alt;
  protected readonly faReact = faReact;
  protected readonly faGitAlt = faGitAlt;
  protected readonly faJira = faJira;
}
