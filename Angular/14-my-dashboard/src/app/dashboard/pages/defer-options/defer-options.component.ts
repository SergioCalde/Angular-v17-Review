import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.css'
})
export default class DeferOptionsComponent {

}
