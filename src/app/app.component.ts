import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { user } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AppComponent {
  userForm: any = FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userDetails();
  }

  userDetails() {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      skills: this.fb.array([this.createArrayGroup()]),
    });
  }

  createArrayGroup() {
    return this.fb.group({
      first: [''],
      second: [''],
      third: [''],
      fourth: [''],
    });
  }

  addArray() {
    let arrinput = this.userForm.get('skills') as FormArray;
    arrinput.push(this.createArrayGroup());
  }

  get getArrayData() {
    return this.userForm.get('skills') as FormArray;
  }

  onsubmit() {
    console.log(this.userForm.value);
  }
}
