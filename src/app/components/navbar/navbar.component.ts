import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToCareers() {
    this.router.navigate(['form'], { relativeTo: this.activatedRoute, queryParams: { page: 'careers' } })
    this.toggleMenu();
  }
}
