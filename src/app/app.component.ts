import { Component } from '@angular/core';

@Component({
  selector: 'lesson-box-app',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {}
