import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,10}$/)]),
  })


  constructor(public _AuthService: AuthService, public _Router: Router) { }

  signIn() {

    this._AuthService.login(this.signinForm.value).subscribe((data) => {
      console.log(data)
      if (data.status === 401) {
        this._Router.navigateByUrl("/signup")
      }
      else {
        localStorage.setItem("TOKEN", data.token)
        this._Router.navigateByUrl("/home")
      }

    }, (err) => {
      console.log(err)
    })
    // console.log(this.signinForm.value)
  }


  ngOnInit(): void {
  }

}
