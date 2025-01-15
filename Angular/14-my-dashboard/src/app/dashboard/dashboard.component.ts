import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
    imports: [RouterOutlet, SideMenuComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
