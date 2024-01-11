import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {getUsr} from "../../helper/mockdaten";
import {last} from "rxjs";

@Component({
  selector: 'pl-condition-and-loops',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './condition-and-loops.component.html',
  styleUrl: './condition-and-loops.component.scss'
})
export class ConditionAndLoopsComponent {
  num = 1;
  showImage = true;
  userList = getUsr();
  increment() {
    this.num++;
  }

  hideImg() {
    this.showImage = false
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }

  protected readonly last = last;
}
