import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface AutomataInfo {
  location: string;
  stockLevel: number;
  lastMaintenance: string;
  status: 'működik' | 'figyelmeztetés' | 'hiba';
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  systemStatus = {
    activeAutomatas: 7,
    totalAutomatas: 8,
    averageStockLevel: 58.6,
  };

  automatas: AutomataInfo[] = [
    {
      location: 'Budapest, Deák Ferenc tér',
      stockLevel: 85,
      lastMaintenance: '2024.04.10',
      status: 'működik',
    },
    {
      location: 'Budapest, Nyugati pályaudvar',
      stockLevel: 28,
      lastMaintenance: '2024.04.08',
      status: 'figyelmeztetés',
    },
    {
      location: 'Budapest, Keleti pályaudvar',
      stockLevel: 92,
      lastMaintenance: '2024.04.12',
      status: 'működik',
    },
    {
      location: 'Budapest, Blaha Lujza tér',
      stockLevel: 15,
      lastMaintenance: '2024.04.05',
      status: 'hiba',
    },
    {
      location: 'Budapest, Széll Kálmán tér',
      stockLevel: 73,
      lastMaintenance: '2024.04.11',
      status: 'működik',
    },
    {
      location: 'Budapest, Móricz Zsigmond körtér',
      stockLevel: 45,
      lastMaintenance: '2024.04.09',
      status: 'működik',
    },
    {
      location: 'Budapest, Örs vezér tere',
      stockLevel: 67,
      lastMaintenance: '2024.04.10',
      status: 'működik',
    },
    {
      location: 'Budapest, Kálvin tér',
      stockLevel: 0,
      lastMaintenance: '2024.04.01',
      status: 'hiba',
    },
  ];

  constructor(private router: Router, private location: Location) {}

  navigateBack() {
    this.location.back();
  }

  refresh() {
    console.log('Frissítés kérése...');
  }

  showDetails(location: string) {
    console.log(`Részletek megjelenítése: ${location}`);
  }
}
