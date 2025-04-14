import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../core/models/menu.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {
  menuItems: MenuItem[] = [
    {
      id: 'automatic-search',
      title: 'Automata kereső',
      gradient: 'from-primary-light to-primary',
    },
    {
      id: 'point-collection',
      title: 'Pontgyűjtés',
      gradient: 'from-secondary-light to-secondary',
    },
    {
      id: 'sustainability-stats',
      title: 'Fenntarthatósági statisztika',
      gradient: 'from-primary-light to-secondary-light',
    },
    {
      id: 'campaigns',
      title: 'Kampányok',
      gradient: 'from-primary-light to-primary',
    },
    {
      id: 'admin',
      title: 'Admin',
      gradient: 'from-secondary-light to-secondary',
    },
    {
      id: 'community',
      title: 'Közösség',
      gradient: 'from-primary-light to-primary',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(menuItem: MenuItem) {
    this.router.navigate([`/${menuItem.id}`]);
  }
}
