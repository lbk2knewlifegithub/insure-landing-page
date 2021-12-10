import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-how-we-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative container--large mt-40 bg-intro flow-root">
      <!--  pattern-->
      <!--  mobile-->
      <img
        class="absolute top-0 right-0 h-full max-w-[50%] md:hidden"
        src="/assets/images/bg-pattern-how-we-work-mobile.svg"
        alt="Pattern"
      />
      <!--  end mobile-->

      <!--  desktop-->
      <img
        class="absolute top-0 right-0 h-full max-w-[50%] hidden md:block"
        src="/assets/images/bg-pattern-how-we-work-desktop.svg"
        alt="Pattern"
      />
      <!--  end desktop-->
      <!--  end pattern-->

      <div
        class="container my-32 flex flex-col items-center justify-center gap-16 sm:my-40 lg:items-start"
      >
        <h1 class="text-inverted text-center text-5xl font-heading md:text-6xl">
          Find out more about how we work
        </h1>

        <a
          class="btn btn-outline-white text-inverted uppercase px-6 font-bold"
          href="#"
          >How we work</a
        >
      </div>
    </div>
  `,
})
export class HowWeWorkComponent {}
