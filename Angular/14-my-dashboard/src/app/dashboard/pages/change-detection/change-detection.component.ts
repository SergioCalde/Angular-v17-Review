import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    imports: [TitleComponent, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './change-detection.component.html',
    styleUrl: './change-detection.component.css'
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {

    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }));

      // No recommended way to update a signal
      // this.frameworkAsSignal.update( value => {
      //   value.name = 'React';

      //   return {...value};
      // });

    }, 3000)

  }


}
