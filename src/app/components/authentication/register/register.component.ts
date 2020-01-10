import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from 'src/app/models/enums/Role';
import { User } from 'src/app/models/User';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  hide = true;
  roles = Object.keys(Role).filter(r => r != 'Admin');

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
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      surename: ['', Validators.required],
      companyName: [''],
      phone: [''],
      role: [this.roles[0], Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.registerForm.controls.email.hasError('required') ? 'Email is required' : this.registerForm.controls.email.hasError('email') ? 'Wrong email address' : '';
  }


  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let newUser: User = this.registerForm.value;

    const shippingDetails: Address = <Address>{
      address: this.registerForm.controls.address.value,
      city: this.registerForm.controls.city.value,
      postalCode: this.registerForm.controls.postalCode.value
    };

    newUser.address = shippingDetails;

    // this.authenticationService.login(this.registerForm.controls.email.value, this.registerForm.controls.password.value).subscribe(
    //   () => {
    //     //this.notificationService.showSuccessToastr('Pomyślnie zalogowałeś się na konto', '');
    //     this.router.navigate(['/'])
    //   },
    //   (error: HttpErrorResponse) => { }/*this.notificationService.showErrorToastr(error.toString() == "Unknown Error" ? "Serwis jest obecnie niedostępny" : error.toString(), 'Wystąpił błąd podczas wykonywania żądania.' )*/);
  }


}
