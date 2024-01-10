import { Component } from '@angular/core';

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

  chgProps() {
    this.imgSrc = 'http://placekitten.com/g/100/100';
    this.fontColor = 'blue';
  }
}
