import {ChangeDetectionStrategy, Component, computed, effect, OnDestroy, signal} from '@angular/core';
import {BehaviorSubject, fromEvent, map, Observable, of, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'pl-rxjs',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsComponent implements OnDestroy {

  readonly currentNum = signal(0);
  readonly double = computed( () => this.currentNum() * 2 );

  readonly logNum = effect( () => {
    const crrNum = this.currentNum(); // das effect Callback indem ich mich hier befinde wird immer ausgeführt, wenn sich ein Signal ändert
    console.log( 'currentNum', crrNum );
  } );


  readonly currentNum$ = new BehaviorSubject(0)
  readonly double$ = this.currentNum$.pipe( map( n => n * 2 ) );

  num: number = 0;

  increment() {
    // this.currentNum.set( 1 );
    this.currentNum.update( n => n + 1 );

    this.currentNum$.next( this.currentNum$.getValue() + 1 );

  }


  private subscriptions: Subscription[] = [];

  constructor( private readonly http$: HttpClient ) {
    this.subscriptions.push(
      // this.initOfSample(),
      // this.initFromEvent()
      // this.initMyFirstColdObservable()
      // this.initHttpReq()
      this.currentNum$.subscribe( {next: n => this.num = n } )
    );

    // this.initHotObservable();
  }

  ngOnDestroy(): void {
    while ( this.subscriptions.length > 0 ) {
      this.subscriptions.pop()?.unsubscribe();
    }
  }


  private initHttpReq( id: number = 1 ) {
    const observable$ = this.http$.get( `https://jsonplaceholder.typicode.com/posts/${id}` )
    return this.subscribe( observable$, 'http')
  }


  private initMyFirstColdObservable() {
    const observable$ = new Observable<number>( subscriber => {
      let counter = 0;
      const intervalID = setInterval( () => {
        subscriber.next( ++counter );
        console.log( 'inner', counter );
        if ( counter === 10 ) {
          subscriber.complete();
        }
      }, 100 );
      return () => {
        clearInterval( intervalID );
      };
    } );
    return this.subscribe( observable$, 'outer' );
    // return this.subscribe( observable$.pipe( take( 5 ) ), 'outer' );
  }

  private initHotObservable() {
    // const observable$ = new Subject<number>();
    const observable$ = new BehaviorSubject<number>( 0 );
    this.subscribe( observable$, 'sub0' );
    observable$.next( 1 );
    this.subscribe( observable$, 'sub1' );
    observable$.next( 2 );
    const sub = this.subscribe( observable$, 'sub2' );
    observable$.next( 3 );
    observable$.next( 4 );
    sub.unsubscribe();
    observable$.next( 5 );
  }

  private initFromEvent() {
    const observable$ = fromEvent<MouseEvent>( document, 'mousemove' )
      .pipe(
        map ( (value) => ( {x: value.clientX, y: value.clientY} ) ),
        // take ( 10 )
        // filter ( (value) => value.x > 100 && value.x < 200 ),
        // tap( console.log ) // side effect oder logging - hiermit werden Streamereignisse nicht verändert - können abder genutzt werden!
      )
    ;
    return this.subscribe( observable$, 'fromEvent sample' );
  }

  private initOfSample() {
    const observable$ = of( 1, 2, 3, 4, 5 );
    this.subscribe( observable$, 'of sample' );

  }

  private subscribe<T>( observable$: Observable<T>, prefix: string = ''): Subscription {
    return observable$.subscribe(
      {
        next: n => console.log( prefix, n ),
        error: err => console.error( prefix, err ),
        complete: () => console.log( prefix, 'complete' )
      }
    );
  }

}
