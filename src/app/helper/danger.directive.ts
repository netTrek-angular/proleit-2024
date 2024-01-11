import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, inject, Input, Output} from '@angular/core';

@Directive({
  selector: 'button[plDanger]',
  standalone: true
})
export class DangerDirective {

  @Input() plDanger: string = '';
  @Output() confirmed = new EventEmitter<void>();

  // bevorzug verwenden ab Angular 17+
  private readonly elem: ElementRef<HTMLButtonElement> = inject( ElementRef );

  // Oldschool injection
  /*
  constructor( private readonly elem: ElementRef<HTMLButtonElement> ) {
    console.log( this.elem.nativeElement  );
  }
  */

  @HostBinding('style.backgroundColor')
  private readonly backgroundColor = 'red';

  @HostBinding('style.fontWeight')
  private readonly fontWeight = 'bolder';

  @HostListener('click')
  private clickHandler() {
    // console.log( this.elem.nativeElement );
    // console.log( 'click' );
    // console.log(confirm ('click') );
    if ( confirm( this.plDanger === '' ? 'bist du sicher?' : this.plDanger ) )
      this.confirmed.emit( );
  }

}
