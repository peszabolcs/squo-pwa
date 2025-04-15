import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

interface Campaign {
  id: string;
  title: string;
  description: string;
  date: string;
  longDescription?: string;
  active: boolean;
}

@Component({
  selector: 'campaign-details-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="p-5 campaign-details-enter">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">{{ data.title }}</h2>
        <button mat-icon-button (click)="close()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="bg-gray-100 p-3 rounded-lg mb-4 flex items-center text-sm">
        <mat-icon class="text-gray-600 mr-2">event</mat-icon>
        <span>{{ data.date }}</span>
      </div>

      <p class="text-gray-700 mb-5">{{ data.longDescription }}</p>

      <div class="flex justify-end">
        <button mat-button color="primary" (click)="close()">Bezárás</button>
      </div>
    </div>
  `,
})
export class CampaignDetailsDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Campaign,
    private dialogRef: MatDialogRef<CampaignDetailsDialog>
  ) {}

  close() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule, MatButtonModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css',
})
export class CampaignsComponent implements OnInit, OnDestroy {
  campaigns: Campaign[] = [
    {
      id: 'malna',
      title: 'Málna íz 20% kedvezmény',
      description: 'Limitált ideig minden málna ízű termékre 20% kedvezmény.',
      date: '2023.10.15 - 2023.10.30',
      longDescription:
        'Minden automatából elérhető málna ízű termékünket 20% kedvezménnyel kínáljuk október 15. és október 30. között. A kedvezmény automatikusan érvényesül vásárlás során.',
      active: true,
    },
    {
      id: 'dupla',
      title: 'Dupla pontok hétvégén',
      description: 'Minden hétvégi vásárlás után dupla pontot adunk.',
      date: 'Minden hétvégén',
      longDescription:
        'Péntek 18:00-tól hétfő 6:00-ig minden vásárlás után kétszeres pontokat íródnak jóvá a felhasználói fiókodban. Az extra pontok automatikusan jóváíródnak a tranzakció után.',
      active: true,
    },
    {
      id: 'kornyezet',
      title: 'Környezetvédelmi nap',
      description: 'Hozz 5 PET palackot és kapsz egy ajándék italt.',
      date: '2023.11.05',
      longDescription:
        'Környezetvédelmi napunkon hozz magaddal 5 üres PET palackot és add le bármelyik gyűjtőpontunkon. Cserébe egy tetszőleges italt választhatsz bármelyik automatánkból. Az akció 2023.11.05-én egész nap érvényes.',
      active: true,
    },
  ];

  constructor(
    private router: Router,
    private location: Location,
    private dialog: MatDialog
  ) {
    console.log('Campaigns component constructed');
  }

  ngOnInit() {
    console.log('Campaigns component initialized');
    // Annak biztosítása, hogy az oldal tetejére navigáljon
    window.scrollTo(0, 0);

    // Alkalmazás a DOM-hoz csak az inicializálás után
    setTimeout(() => {
      this.applyAnimations();
    }, 100);
  }

  ngOnDestroy() {
    console.log('Campaigns component destroyed');
  }

  private applyAnimations() {
    const cards = document.querySelectorAll('.campaign-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  navigateBack() {
    this.location.back();
  }

  showDetails(campaignId: string) {
    const campaign = this.campaigns.find((c) => c.id === campaignId);
    if (campaign) {
      this.dialog.open(CampaignDetailsDialog, {
        width: '90%',
        maxWidth: '500px',
        data: campaign,
      });
    }
  }
}
