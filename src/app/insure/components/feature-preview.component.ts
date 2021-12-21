import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="grid gap-6 justify-items-center tablet:gap-8 desktop:justify-items-start"
    >
      <!--  icon-->
      <div>
        <img [src]="feature.src" [alt]="feature.name" />
      </div>
      <!--  end icon-->

      <div class=" grid gap-4 text-center max-w-md">
        <!--  name-->
        <h3
          class="text-2xl text-center font-heading tablet:text-3xl desktop:text-left desktop:text-2xl"
        >
          {{ feature.name }}
        </h3>
        <!--  end name-->

        <!--  description-->
        <p
          class="text-xs text-center text-muted tracking-wider tablet:text-base desktop:text-left desktop:text-sm"
        >
          {{ feature.description }}
        </p>
        <!--  end description-->
      </div>
    </div>
  `,
})
export class FeaturePreviewComponent {
  @Input() feature!: Feature;
}
