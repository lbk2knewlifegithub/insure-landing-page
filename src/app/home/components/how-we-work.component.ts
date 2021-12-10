import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-how-we-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative container my-40 bg-intro flow-root">
      <!--  pattern-->
      <!--  mobile-->
      <img
        class="absolute top-0 right-0 h-full max-w-[50%] tablet:hidden"
        src="/assets/images/bg-pattern-how-we-work-mobile.svg"
        alt="Pattern"
      />
      <!--  end mobile-->

      <!--  desktop-->
      <img
        class="absolute top-0 right-0 h-full max-w-[50%] hidden tablet:block"
        src="/assets/images/bg-pattern-how-we-work-desktop.svg"
        alt="Pattern"
      />
      <!--  end desktop-->
      <!--  end pattern-->

      <div
        class="my-24 flex flex-col items-center justify-center gap-16 desktop:justify-between desktop:flex-row desktop:px-20"
      >
        <h1 class="text-inverted text-center text-5xl font-heading desktop:text-left">
          Find out more <br class="hidden desktop:inline"> about how we work
        </h1>

        <a
          class="btn btn-outline-white text-inverted uppercase px-6 font-bold z-40"
          href="#"
          >How we work</a
        >
      </div>
    </div>
  `,
})
export class HowWeWorkComponent {}
