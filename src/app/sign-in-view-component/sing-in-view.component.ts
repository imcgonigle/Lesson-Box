import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in-view',
  templateUrl: 'app/sign-in-view-component/sign-in-view.component.html'
})

export class SignInViewComponent {
  constructor(private router: Router){}

  signIn(): void{
    this.router.navigate(['/dashboard'])
  }
}