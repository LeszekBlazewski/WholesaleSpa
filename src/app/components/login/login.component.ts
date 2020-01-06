import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    //protected notificationService: NotificationService,
  ) {
    //redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.loginForm.controls.email.hasError('required') ? 'Field is required' : this.loginForm.controls.email.hasError('email') ? 'Wrong email address' : '';
  }


  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      () => {
        //this.notificationService.showSuccessToastr('Pomyślnie zalogowałeś się na konto', '');
        this.router.navigate(['/'])
      },
      (error: HttpErrorResponse) => { }/*this.notificationService.showErrorToastr(error.toString() == "Unknown Error" ? "Serwis jest obecnie niedostępny" : error.toString(), 'Wystąpił błąd podczas wykonywania żądania.' )*/);
  }


}
