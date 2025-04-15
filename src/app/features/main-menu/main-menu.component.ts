import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../core/models/menu.model';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  host: {
    class: 'block w-full h-full',
    '[style.background-image]': 'getBackgroundImage()',
    '[style.background-size]': "'20px 20px'",
  },
})
export class MainMenuComponent implements OnInit {
  activePromo = 0;
  stats = { bottles: 0, points: 0, co2: 0 };

  promos = [
    {
      title: 'Málna íz 20% kedvezmény',
      description: 'Limitált ideig minden málna ízű termékre',
      gradient: 'from-[#5ce1e6] to-[#4dabff]',
      icon: 'card_giftcard',
    },
    {
      title: 'Dupla pontok hétvégén',
      description: 'Minden hétvégi vásárlás után dupla pont',
      gradient: 'from-[#ffc04d] to-[#ff9a4d]',
      icon: 'monetization_on',
    },
    {
      title: 'Környezetvédelmi nap',
      description: 'Hozz 5 PET palackot és kapsz egy ajándék italt',
      gradient: 'from-[#5ce1e6] to-[#ffc04d]',
      icon: 'eco',
    },
  ];

  menuItems: MenuItem[] = [
    {
      id: 'automatic-search',
      title: 'Automata kereső',
      description: 'Automatikus keresés a legjobb ajánlatokért',
      icon: 'search',
      gradient: 'from-[#5ce1e6] to-[#4dabff]',
      color: 'text-[#5ce1e6]',
    },
    {
      id: 'point-collection',
      title: 'Pontgyűjtés',
      description: 'Gyűjts pontokat és válts be értékes jutalmakat',
      icon: 'monetization_on',
      gradient: 'from-[#ffc04d] to-[#ff9a4d]',
      color: 'text-[#ffc04d]',
    },
    {
      id: 'sustainability-stats',
      title: 'Fenntarthatósági statisztika',
      description: 'Kövesd nyomon a fenntarthatósági eredményeidet',
      icon: 'bar_chart',
      gradient: 'from-[#5ce1e6] to-[#ffc04d]',
      color: 'text-[#5ce1e6]',
    },
    {
      id: 'campaigns',
      title: 'Jutalmak és akciók',
      description: 'Fedezd fel a legújabb jutalmakat és akciókat',
      icon: 'card_giftcard',
      gradient: 'from-[#5ce1e6] to-[#4dabff]',
      color: 'text-[#5ce1e6]',
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Kezeld az adminisztratív feladatokat',
      icon: 'admin_panel_settings',
      gradient: 'from-[#ffc04d] to-[#ff9a4d]',
      color: 'text-[#ffc04d]',
    },
    {
      id: 'community',
      title: 'Közösség',
      description: 'Csatlakozz a közösséghez',
      icon: 'people',
      gradient: 'from-[#5ce1e6] to-[#4dabff]',
      color: 'text-[#5ce1e6]',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Animate stats
    const statsInterval = setInterval(() => {
      this.stats = {
        bottles:
          this.stats.bottles < 12 ? this.stats.bottles + 1 : this.stats.bottles,
        points:
          this.stats.points < 25 ? this.stats.points + 1 : this.stats.points,
        co2: this.stats.co2 < 3 ? this.stats.co2 + 1 : this.stats.co2,
      };
    }, 100);

    // Rotate promos
    const promoInterval = setInterval(() => {
      this.activePromo = (this.activePromo + 1) % 3;
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(statsInterval);
      clearInterval(promoInterval);
    };
  }

  navigateTo(menuItem: MenuItem) {
    this.router.navigate([`/${menuItem.id}`]);
  }

  getBackgroundImage(): string {
    return 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlNmU2ZTYiIGZpbGwtb3BhY2l0eT0iMC44Ii8+PC9zdmc+")';
  }
}
