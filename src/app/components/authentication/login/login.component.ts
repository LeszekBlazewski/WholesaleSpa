import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {
    //redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9.+_%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$")]],
      password: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.loginForm.controls.email.hasError('required') ? 'Field is required' : this.loginForm.controls.email.hasError('pattern') ? 'Wrong email address' : '';
  }


  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      () => {
        this.snackBar.open('Successfully logged in', null, {
          duration: 2000,
          horizontalPosition: "right"
        });
        this.router.navigate(['/'])
      },
      (error) => {
        this.snackBar.open(error, null, {
          duration: 2000,
          horizontalPosition: "right"
        });
      });
  }


}
