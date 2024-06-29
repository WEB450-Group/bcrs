/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date: 29. June, 2024
; Modified by: Joanna Brumfield and Zadkiel Rodriguez Alvarado
; Description: App Component
;===========================================
*/
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
  <router-outlet></router-outlet>
`,
  styles: []
})
export class AppComponent {
  title = 'bcrs';
}
