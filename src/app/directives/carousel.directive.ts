import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

export interface CarouselContext {
  $implicit: string;
  controller: {
    next: () => void;
    prev: () => void;
    last: boolean,
    index: number
  };
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[carousel]'
})
export class CarouselDirective implements OnInit, OnDestroy {
  timerId: number | null = null;
  context: CarouselContext | null = null;
  index = 0;

  constructor(
    private tpl: TemplateRef<CarouselContext>,
    private vcr: ViewContainerRef
  ) {}

  @Input('carouselFrom') fields: any[];

  private _autoplayDelay: number;

  @Input('carouselWithDelay')
  set autoplayDelay(autoplayDelay: number) {
    this._autoplayDelay = autoplayDelay;
  }

  get autoplayDelay() {
    return this._autoplayDelay || 1000;
  }

  @Input('carouselAutoplay')
  set autoplay(autoplay: 'on' | 'off') {
    autoplay === 'on' ? this.setAutoplayTimer() : this.clearAutoplayTimer();
  }

  ngOnInit(): void {
    this.context = {
      $implicit: this.fields[0],
      controller: {
        last: (this.index === (this.fields.length - 1)),
        index: this.index,
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };


    this.vcr.createEmbeddedView(this.tpl, this.context);
  }

  ngOnDestroy() {
    this.clearAutoplayTimer();
  }

  next() {
    this.index++;
    if (this.index >= this.fields.length) {
      this.index = 0;
    }
    this.context.controller.last = (this.index === (this.fields.length - 1))
    this.context.$implicit = this.fields[this.index];
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.fields.length - 1;
    }
    this.context.controller.last = (this.index === (this.fields.length - 1))
    this.context.$implicit = this.fields[this.index];
  }

  private clearAutoplayTimer() {
    window.clearInterval(this.timerId);
  }

  private setAutoplayTimer() {
    this.timerId = window.setInterval(() => this.next(), this.autoplayDelay);
  }
}