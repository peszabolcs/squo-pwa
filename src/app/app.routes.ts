import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/main-menu/main-menu.component').then(
        (m) => m.MainMenuComponent
      ),
  },
  {
    path: 'automatic-search',
    loadComponent: () =>
      import('./features/automatic-search/automatic-search.component').then(
        (m) => m.AutomaticSearchComponent
      ),
  },
  {
    path: 'point-collection',
    loadComponent: () =>
      import('./features/point-collection/point-collection.component').then(
        (m) => m.PointCollectionComponent
      ),
  },
  {
    path: 'sustainability-stats',
    loadComponent: () =>
      import(
        './features/sustainability-stats/sustainability-stats.component'
      ).then((m) => m.SustainabilityStatsComponent),
  },
  {
    path: 'campaigns',
    loadComponent: () =>
      import('./features/campaigns/campaigns.component').then(
        (m) => m.CampaignsComponent
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then((m) => m.AdminComponent),
  },
  {
    path: 'community',
    loadComponent: () =>
      import('./features/community/community.component').then(
        (m) => m.CommunityComponent
      ),
  },
];
