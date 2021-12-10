import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-modal-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--modal open navbar-->
    <header class="w-full h-full bg-dark">
      <nav class="py-6 bg-fill">
        <div class="container flex items-center justify-between">
          <div>
            <img src="/assets/images/logo.svg" alt="Logo" />
          </div>

          <!--    hamburger-->
          <div class="cursor-pointer">
            <img src="/assets/images/icon-close.svg" alt="Close" />
          </div>
          <!--    end hamburger-->
        </div>
      </nav>

      <!--    links-->
      <div class="relative h-[calc(100%-80px)]">
        <div class="container">
          <!--        pattern-->
          <img
            class="absolute bottom-0 left-0 object-contain w-full"
            src="/assets/images/bg-pattern-mobile-nav.svg"
            alt="Pattern"
          />
          <!--        end pattern-->

          <ul
            class="flex flex-col items-center text-lg font-semibold tracking-widest uppercase pt-14 space-y-14 text-inverted"
          >
            <li>
              <a href="#">How we work</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li class="w-full">
              <a class="block btn btn-outline-white" href="#">View plans</a>
            </li>
          </ul>
        </div>
      </div>
      <!--    end links-->
    </header>
    <!--end modal open navbar-->
  `,
})
export class ModalBoxComponent {}
