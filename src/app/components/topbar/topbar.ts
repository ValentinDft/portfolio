import {Component, inject, signal} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-topbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  private router = inject(Router);

  protected isOpenToWork = signal<boolean>(false);
  protected urlToDisplay = signal<string>('');

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((router) => {
        this.urlToDisplay.set(router.url);
      });
  }
}
