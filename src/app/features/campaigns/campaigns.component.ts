import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css',
})
export class CampaignsComponent {
  constructor(private router: Router, private location: Location) {}

  navigateBack() {
    this.location.back();
  }
}
