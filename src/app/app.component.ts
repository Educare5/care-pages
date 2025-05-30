import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'care';
  isSidebarOpened = false;
  isMobile = window.innerWidth < 768; // Adjust breakpoint as needed

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768;
  }
  sideBarOpened(opened: any) {
    this.isSidebarOpened = opened;
  }
}
