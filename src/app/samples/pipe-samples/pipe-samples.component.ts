import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'pl-pipe-samples',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './pipe-samples.component.html',
  styleUrl: './pipe-samples.component.scss'
})
export class PipeSamplesComponent {
  readonly date = new Date();
  readonly price = Math.PI;
}
