import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'List', icon: 'list', route: './list' },
    { label: 'Add', icon: 'add', route: './new-hero' },
    { label: 'Search', icon: 'search', route: './search' },
  ]

}
