import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        items: [
          {
            label: 'User',
            icon: 'pi pi-user',
            routerLink: 'user',
          },
          { label: 'Car', icon: 'pi pi-car', routerLink: 'car' },
          { label: 'Customer', icon: 'pi pi-users', routerLink: 'customer' },
          { label: 'Order', icon: 'pi pi-shopping-cart', routerLink: 'order' },
        ],
      },
    ];
  }
}
