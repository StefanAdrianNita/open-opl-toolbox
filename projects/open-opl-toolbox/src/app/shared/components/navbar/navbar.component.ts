import { Component } from '@angular/core';
import { environment } from '../../../environment';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  version: string = environment.version;

  constructor() {}
}
