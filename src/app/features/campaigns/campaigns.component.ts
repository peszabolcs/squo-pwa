import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css',
})
export class CampaignsComponent {
  ArrowLeft = ArrowLeft;

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/main-menu']);
  }
}
