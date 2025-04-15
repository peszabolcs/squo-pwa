import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {
  constructor(private router: Router, private location: Location) {}

  navigateBack() {
    this.location.back();
  }
}
