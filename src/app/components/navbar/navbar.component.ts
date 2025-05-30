import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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
  isMobile = window.innerWidth < 768; // Adjust breakpoint as needed

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  toggleMenu(screen: string) {
    if (screen === 'mobile') {
      this.isMenuOpen = !this.isMenuOpen;
      this.menuToggle.emit(this.isMenuOpen);
    } else {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768;
  }
}
