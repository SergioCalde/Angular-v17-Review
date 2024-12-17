import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    {
      name: 'Full Screen',
      route: '/maps/fullscreen'
    },
    {
      name: 'Markers',
      route: '/maps/markers'
    },
    {
      name: 'Houses',
      route: '/maps/properties'
    },
    {
      name: 'Zoom Range',
      route: '/maps/zoom-range'
    },
    {
      name: 'Alone',
      route: '/alone'
    }
  ];
}
