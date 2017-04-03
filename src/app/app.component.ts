import { Component } from '@angular/core';

@Component({
  selector: 'lesson-box-app',
  template: `
    <h1>{{name}}</h1>
    <dashboard></dashboard>
  `,
})
export class AppComponent  { name = 'Lesson Box'; }
