import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Different } from '../models/different.model';

@Component({
  selector: 'lbk-different-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid gap-6 justify-items-center tablet:gap-8 desktop:justify-items-start">
      <!--  icon-->
      <div>
        <img [src]="different.src" [alt]="different.name" />
      </div>
      <!--  end icon-->

      <div class=" grid gap-4 text-center max-w-md">
        <!--  name-->
        <h3 class="text-2xl text-center font-heading tablet:text-3xl desktop:text-left desktop:text-2xl">
          {{ different.name }}
        </h3>
        <!--  end name-->

        <!--  description-->
        <p class="text-xs text-center text-muted tracking-wider tablet:text-base desktop:text-left desktop:text-sm">
          {{ different.description }}
        </p>
        <!--  end description-->
      </div>
    </div>
  `,
})
export class DifferentCardComponent {
  @Input('different') different!: Different;
}
