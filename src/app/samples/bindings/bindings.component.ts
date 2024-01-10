import {Component, HostBinding, HostListener, signal} from '@angular/core';

@Component({
  selector: 'pl-bindings',
  standalone: true,
  imports: [],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.scss'
})
export class BindingsComponent {
  imgFile = 'cat.jpeg';
  imgSrc = 'http://placekitten.com/g/200/200';
  fontColor: string | number = 'red';
  width = 200;
  className: string = 'content';
  isSelectd: boolean = false;

  @HostBinding('style.font-size')
  size : string = '16px';

  getSelected = signal<boolean>(false);

  @HostListener('click', ['$event'])
  chgProps( event: MouseEvent ) {
    this.imgSrc = 'http://placekitten.com/g/100/100';
    this.fontColor = 'blue';
    this.className = 'content-red';
    this.isSelectd = !this.isSelectd;
    console.log( event );
    this.size = '32px';
  }

  setAsUnselected() {
    this.isSelectd=false;
  }

  setAsSelected() {
    this.isSelectd=true;
  }

  chgSelectionByEventType ($event: MouseEvent) {
    this.isSelectd = $event.type === 'mouseenter';
    this.getSelected.set(this.isSelectd);
    console.log( $event.type, this.isSelectd);
  }

  // Methoden sind z. T. sehr ressourceintensiv;
  /*
  getSelected() {
    return this.isSelectd;
  }
  */
}
