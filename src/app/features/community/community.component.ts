import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {
  ArrowLeft = ArrowLeft;

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/main-menu']);
  }
}
