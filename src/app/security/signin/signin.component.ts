/*
============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date: 29. June, 2024
; Modified by: Joanna Brumfield and Zadkiel Rodriguez Alvarado
; Description: Sign-in Component
;===========================================
*/
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { FormBuilder, ReactiveFormsModule, Validators,  FormGroup } from '@angular/forms';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

//interface/model
export interface SessionUser {

}

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterModule,
    // ReactiveFormsModule,
    NgClass,
    CommonModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  errMessage: string = '';
  sessionUser: SessionUser;
  isLoading: boolean = false;


  constructor() {
    this.errMessage = "";
    this.sessionUser = {} as SessionUser;
  }

    //UI submit button sign in function
    signin() {
      //for status wheel/spinner 
      this.isLoading = true;

      //code
    }
}
