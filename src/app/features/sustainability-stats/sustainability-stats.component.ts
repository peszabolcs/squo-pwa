import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { Location } from '@angular/common';

interface StatItem {
  id: number;
  title: string;
  value: string;
  icon: string;
  change: number;
}

@Component({
  selector: 'app-sustainability-stats',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sustainability-stats.component.html',
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
    trigger('listAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(10px)', opacity: 0 }),
        animate(
          '200ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class SustainabilityStatsComponent {
  stats: StatItem[] = [
    {
      id: 1,
      title: 'CO2 megtakarítás',
      value: '125 kg',
      icon: 'eco',
      change: 12,
    },
    {
      id: 2,
      title: 'Megtett távolság',
      value: '450 km',
      icon: 'route',
      change: 8,
    },
    {
      id: 3,
      title: 'Megtakarított üzemanyag',
      value: '45 l',
      icon: 'local_gas_station',
      change: -5,
    },
    {
      id: 4,
      title: 'Közösségi utazások',
      value: '24 db',
      icon: 'groups',
      change: 15,
    },
  ];

  constructor(private router: Router, private location: Location) {}

  navigateBack(): void {
    this.location.back();
  }
}
