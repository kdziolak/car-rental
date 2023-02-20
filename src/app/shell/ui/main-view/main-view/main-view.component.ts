import { Component } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  menuItems = [
    { label: 'Strona główna', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Kontakt', icon: 'pi pi-envelope', routerLink: '/contact' },
    {
      label: 'Kategorie',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'Sport',
          icon: 'pi pi-fw pi-football',
          routerLink: '/category/sport',
        },
        {
          label: 'Technologia',
          icon: 'pi pi-fw pi-desktop',
          routerLink: '/category/technology',
        },
        {
          label: 'Muzyka',
          icon: 'pi pi-fw pi-music',
          routerLink: '/category/music',
        },
      ],
    },
  ];
}
