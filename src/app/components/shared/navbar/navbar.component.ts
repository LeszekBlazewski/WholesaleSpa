import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from 'src/app/models/enums/Role';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentUser: User;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Employee;
  }

  get isCourier() {
    return this.currentUser && this.currentUser.role === Role.Courier;
  }

  get isClient() {
    return this.currentUser && this.currentUser.role === Role.Client;
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}