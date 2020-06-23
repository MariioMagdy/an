import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm = new FormGroup({
    'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'age': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(100)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,10}$/)]),
  })


  constructor(public _AuthService: AuthService, public _Router: Router) {

  }

  signUp() {

    this._AuthService.register(this.signupForm.value).subscribe(() => {
      this._Router.navigateByUrl("/signin")
    }, (err) => {
      console.log(err)
    })
    console.log(this.signupForm.value)
  }

  ngOnInit(): void {
  }

}
