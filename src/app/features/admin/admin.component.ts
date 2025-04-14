import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  ArrowLeft = ArrowLeft;

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/main-menu']);
  }
}
