import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroNames: string[] = ['Spider-man','Ironman','Hulk','Thor','Captain America'];
  deletedHero?: string;
  // heroNames: string[] = [];

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}