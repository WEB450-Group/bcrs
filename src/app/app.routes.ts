/*
============================================
; Title:  app.routes.ts
; Author: Professor Krasso
; Date: 29. June, 2024
; Modified by: Joanna Brumfield and Zadkiel Rodriguez Alvarado
; Description: App Routes
;===========================================
*/
import { Routes } from '@angular/router';

import { BaseLayoutComponent } from './base-layout/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ServiceGraphComponent } from './service-graph/service-graph.component';
import { ServiceRepairComponent } from './service-repair/service-repair.component';
import { FaqComponent } from './faq/faq.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SigninComponent } from './security/signin/signin.component';
import { RegistrationComponent } from './registration/registration.component'

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: "Bob's Computer repair shop: Home"
      },
      {
        path: 'home',
        component: HomeComponent,
        title: "Bob's Computer repair shop: Home"
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'service-graph',
        component: ServiceGraphComponent
      },
      {
        path: 'service-repair',
        component: ServiceRepairComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', 
    redirectTo: 'not-found'
  }
];

