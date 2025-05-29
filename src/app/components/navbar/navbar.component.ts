import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() menuToggle = new EventEmitter<boolean>();;
  isMenuOpen = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  toggleMenu(screen: string) {
    if (screen === 'mobile') {
      this.isMenuOpen = !this.isMenuOpen;
      this.menuToggle.emit(this.isMenuOpen);
    } else {
      this.isMenuOpen = false;
    }
  }
}
