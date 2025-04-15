import { Component, OnInit } from '@angular/core';
import { CommonModule, Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';
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
  position?: { lat: number; lng: number };
}

@Component({
  selector: 'app-automatic-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, GoogleMapsModule],
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
export class AutomaticSearchComponent implements OnInit {
  searchQuery = '';
  center = { lat: 47.4979, lng: 19.0402 }; // Budapest
  zoom = 13;
  mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ],
  };
  markerOptions = {
    icon: {
      path: 0,
      scale: 7,
      fillColor: '#FF0000',
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2,
    },
  };

  myLocationMarkerOptions = {
    icon: {
      path: 0,
      scale: 7,
      fillColor: '#4285F4',
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2,
    },
  };

  locations: Location[] = [
    {
      id: 1,
      name: 'Budapest, Deák Ferenc tér',
      distance: '0.5 km',
      position: { lat: 47.4979, lng: 19.0402 },
    },
    {
      id: 2,
      name: 'Budapest, Nyugati pályaudvar',
      distance: '1.2 km',
      position: { lat: 47.5011, lng: 19.0557 },
    },
    {
      id: 3,
      name: 'Budapest, Keleti pályaudvar',
      distance: '2.3 km',
      position: { lat: 47.5, lng: 19.0833 },
    },
    {
      id: 4,
      name: 'Szeged, Dugonics tér',
      distance: '170 km',
      position: { lat: 46.253, lng: 20.1414 },
    },
    {
      id: 5,
      name: 'Debrecen, Nagytemplom',
      distance: '230 km',
      position: { lat: 47.5316, lng: 21.6273 },
    },
  ];

  constructor(private router: Router, private location: NgLocation) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.updateDistances();
        },
        () => {
          console.log('Nem sikerült lekérni a helyzetet');
        }
      );
    }
  }

  updateDistances() {
    this.locations = this.locations.map((location) => {
      if (location.position) {
        const distance = this.calculateDistance(
          this.center.lat,
          this.center.lng,
          location.position.lat,
          location.position.lng
        );
        return {
          ...location,
          distance:
            distance < 10
              ? `${distance.toFixed(1)} km`
              : `${Math.round(distance)} km`,
        };
      }
      return location;
    });
  }

  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371; // Föld sugara kilométerben
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  navigateBack() {
    this.location.back();
  }
}
