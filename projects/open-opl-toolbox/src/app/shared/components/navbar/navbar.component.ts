import { Component } from '@angular/core';
import { environment } from '../../../environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  version: string = environment.version;

  constructor(
    private readonly route: ActivatedRoute
  ) {}

  get currentRoute(): string {
    return this.route.firstChild?.snapshot.url[0].path || '';
  }
}
