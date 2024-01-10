import { Component } from '@angular/core';

@Component({
  selector: 'pl-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {
  percent = 0;
  private timer: number | null = null;

  constructor() {
    this.startTimer();
  }

  private startTimer () {
    if ( this.timer ) {
      this.stopTimer()
    }
    this.percent = 0;
    this.timer = window.setInterval(() => {
      this.incremtent();
    }, 100 )
  }

  private stopTimer () {
    if ( this.timer ) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }


  private incremtent( step: number = 10 ) {
    this.percent = Math.min( this.percent + step, 100 );
    if ( this.percent === 100 ) {
      this.stopTimer();
    }
  }
}
