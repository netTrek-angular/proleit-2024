import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'pl-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;
  username!: FormControl;
  email!: FormControl;
  personalInfo!: FormGroup;
  msg!: FormControl;
  private readonly fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.myForm = this.fb.group( {
      personalInfo: this.fb.group( {
        name: ['', [Validators.required, Validators.minLength ( 3 )] ],
        email: ['', [Validators.required, Validators.email ] ],
      }),
      msg: [ '' ]
    });

    this.username = this.myForm.get ( ['personalInfo', 'name'] ) as FormControl;
    this.email = this.myForm.get ( ['personalInfo', 'email'] ) as FormControl ;
    this.msg = this.myForm.get ( ['msg'] ) as FormControl ;
    this.personalInfo = this.myForm.get ( ['personalInfo'] ) as FormGroup ;
  }
}
