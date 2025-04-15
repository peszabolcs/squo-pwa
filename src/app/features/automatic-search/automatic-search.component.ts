import { Component } from '@angular/core';
import { CommonModule, Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

interface Location {
  id: number;
  name: string;
  distance: string;
}

@Component({
  selector: 'app-automatic-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './automatic-search.component.html',
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
  ],
})
export class AutomaticSearchComponent {
  searchQuery = '';

  locations: Location[] = [
    { id: 1, name: 'Budapest, Deák Ferenc tér', distance: '0.5 km' },
    { id: 2, name: 'Budapest, Nyugati pályaudvar', distance: '1.2 km' },
    { id: 3, name: 'Budapest, Keleti pályaudvar', distance: '2.3 km' },
    { id: 4, name: 'Szeged, Dugonics tér', distance: '170 km' },
    { id: 5, name: 'Debrecen, Nagytemplom', distance: '230 km' },
  ];

  constructor(private router: Router, private location: NgLocation) {}

  navigateBack() {
    this.location.back();
  }
}
