import { Component } from '@angular/core';

@Component({
  selector: 'pl-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {

  static readonly MODE_PROGRESS = 'progress';
  static readonly MODE_COUNTDOWN = 'countdown';


  percent = 0;
  private timer: number | null = null;
  private mode: 'progress' | 'countdown'  = CountdownComponent.MODE_PROGRESS;

  constructor() {
    this.startTimer();
  }

  private startTimer () {
    if ( this.timer ) {
      this.stopTimer()
    }
    this.percent = this.mode === CountdownComponent.MODE_PROGRESS ? 0 : 100;
    this.timer = window.setInterval(() => {
      if ( this.mode === CountdownComponent.MODE_PROGRESS ) {
        this.incremtent();
      } else {
        this.decremtent();
      }
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

  private decremtent(step: number = 10) {
    this.percent = Math.max( this.percent - step, 0 );
    if ( this.percent === 0 ) {
      this.stopTimer();
    }
  }
}
