import {
  Directive,
  HostListener,
  HostBinding
 } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toogleOpen(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.isOpen = !this.isOpen;
  }
}
