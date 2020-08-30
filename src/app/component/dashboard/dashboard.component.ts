import { User } from 'firebase';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  user: User;
  ngOnInit(): void {
    this.getuserDetails();
  }

  getuserDetails() {
    this.authService.userDetail().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error));
  }
  handleError(error: any): void {
    console.log('error are ', error);
    console.log('error are ' + error);
  }

  handleResponse(data: any): void {
    console.log(data);
    console.log('data are ', data);
  }
}
