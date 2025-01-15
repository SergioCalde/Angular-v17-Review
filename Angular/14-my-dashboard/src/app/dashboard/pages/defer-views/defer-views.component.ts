import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    imports: [HeavyLoadersSlowComponent, TitleComponent],
    templateUrl: './defer-views.component.html',
    styleUrl: './defer-views.component.css'
})
export default class DeferViewsComponent {

}
