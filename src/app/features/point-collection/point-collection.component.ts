import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

interface Reward {
  id: number;
  name: string;
  points: number;
  icon: string;
}

@Component({
  selector: 'app-point-collection',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './point-collection.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            stagger(100, [
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class PointCollectionComponent {
  rewards: Reward[] = [
    { id: 1, name: 'Ingyenes ital', points: 50, icon: 'local_cafe' },
    { id: 2, name: '10% kedvezmény', points: 100, icon: 'percent' },
    { id: 3, name: 'Ajándék termék', points: 200, icon: 'card_giftcard' },
  ];

  constructor(private router: Router, private location: Location) {}

  navigateBack() {
    this.location.back();
  }
}
