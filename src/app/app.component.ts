import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  template: `
    <div class="app-container h-full w-full relative">
      <div
        class="fixed inset-0 bg-gradient-to-br from-[#f8fbfc] via-[#edf7f9] to-[#f9f3e8]"
      ></div>
      <div class="bg-dots"></div>
      <div class="relative h-full">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
      .app-container {
        isolation: isolate;
      }
    `,
  ],
})
export class AppComponent {}
