import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from 'src/app/models/enums/Role';
import { User } from 'src/app/models/User';
import { Address } from 'src/app/models/Address';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  hide = true;
  roles = Object.keys(Role).filter(r => r !== Role.Employee);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9.+_%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$")]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: [''],
      phone: ['', Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)],
      role: [this.roles[0], Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.registerForm.controls.email.hasError('required') ? 'Email is required' : this.registerForm.controls.email.hasError('pattern') ? 'Wrong email address' : '';
  }

  getErrorMessagePhone() {
    return this.registerForm.controls.phone.hasError('pattern') ? 'Wrong phone number' : '';
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



    this.userService.postUserRegister(newUser).subscribe(
      () => {
        this.snackBar.open('Successfully registred account', null, {
          duration: 2000,
          horizontalPosition: "right"
        });
        this.router.navigate(['/login'])
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(error.toString(), null, {
          duration: 2000,
          horizontalPosition: "right"
        });
      });
  }


}
