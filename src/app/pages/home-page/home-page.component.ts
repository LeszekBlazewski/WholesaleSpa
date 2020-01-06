import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  currentUser: User;

  constructor(private authentiocationService: AuthenticationService) { }

  ngOnInit() {
    this.currentUser = this.authentiocationService.currentUserValue;
  }

}
