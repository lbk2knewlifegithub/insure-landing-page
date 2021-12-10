import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Different } from '../models/different.model';

@Component({
  selector: 'lbk-different-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex flex-col items-center justify-center max-w-lg mx-auto xl:items-start"
    >
      <!--  icon-->
      <div>
        <img [src]="different.src" [alt]="different.name" />
      </div>
      <!--  end icon-->

      <!--  name-->
      <h3 class="text-3xl text-center font-heading mt-10 xl:text-left">
        {{ different.name }}
      </h3>
      <!--  end name-->

      <!--  description-->
      <p class="text-center mt-6 text-muted tracking-wider xl:text-left">
        {{ different.description }}
      </p>
      <!--  end description-->
    </div>
  `,
})
export class DifferentCardComponent {
  @Input('different') different!: Different;
}
