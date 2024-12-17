import { Directive, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollDetector]',
})
export class ScrollDetectorDirective {
  private debounceTimeout: any;

  @Output() scrolledToBottom = new EventEmitter<void>();
  

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 100;
    const position = window.innerHeight + window.scrollY;
    const height = document.documentElement.scrollHeight;


    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      if (height - position <= threshold) {
        this.scrolledToBottom.emit();
      }
    }, 200);
  }
}
