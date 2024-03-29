import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {User} from "../../user";
import {JsonPipe, UpperCasePipe} from "@angular/common";
import {SpacerPipe} from "../../../samples/pipe-samples/spacer.pipe";

@Component({
  selector: 'pl-user-list-item',
  standalone: true,
  imports: [
    UpperCasePipe,
    JsonPipe,
    SpacerPipe
  ],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.scss'
})

// Kinds Komponente von UserListComponent
export class UserListItemComponent implements OnInit, AfterViewInit, OnChanges {

  // required: true -> muss übergeben werden - geht erst ab ng17
  @Input( {required: true}) userData!: User;
  // @Input( {required: true, transform: numberAttribute}) num!: number;
  @Output() selectUsr = new EventEmitter<User>();

  // private readonly $user = inject( UserService );

  sayHello() {
    console.log('hello', this);
  }

  @HostListener('click')
  triggerEvent() {
    this.selectUsr.emit(this.userData);
  }

  ngAfterViewInit(): void {
    return undefined; // nur gemacht damit die console stumm bleibt
    // console.log('after view init' );
  }

  ngOnInit(): void {
    // console.log('init', this.$user );
    return undefined; // nur gemacht damit die console stumm bleibt
    // console.log('ini', this.userData );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( 'userData' in changes ) {
      // console.log('userData changes', changes['userData'].currentValue );
    }
  }
}
