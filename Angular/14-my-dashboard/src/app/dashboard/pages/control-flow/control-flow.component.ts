import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';



type Grade = 'A' | 'B' | 'F';
@Component({
    imports: [TitleComponent],
    templateUrl: './control-flow.component.html',
    styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwik']);
  
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update(value => !value);
  }


}
