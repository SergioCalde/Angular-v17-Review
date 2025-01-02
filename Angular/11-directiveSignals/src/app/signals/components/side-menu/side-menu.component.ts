import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  // public menuItems: MenuItem[] = [
  //   {
  //     title: 'Counter',
  //     router: 'counter'
  //   },
  //   {
  //     title: 'User Info',
  //     router: 'userInfo'
  //   },
  //   {
  //     title: 'Properties',
  //     router: 'properties'
  //   }
  // ];


  public menuItems = signal<MenuItem[]>([ 
        {
          title: 'Counter',
          router: 'counter'
        },
        {
          title: 'User Info',
          router: 'userInfo'
        },
        {
          title: 'Properties',
          router: 'properties'
        }
  ]);


}
