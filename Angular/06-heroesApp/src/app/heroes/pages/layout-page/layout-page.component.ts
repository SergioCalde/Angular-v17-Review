import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

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



  constructor( 
    private authService: AuthService, 
    private router: Router
  ) { }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(): void{
    this.authService.logout();
    this.router.navigate(['/auth'])
  }
}
