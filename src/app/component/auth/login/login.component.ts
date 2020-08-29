import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error = null;
  public hide = true;
  public valideUser = false;
  public tokenValue = null;
  public isLoading = false;
  public form = {
    email: null,
    password: null
  };
  constructor(
               private authservice: AuthService,
               private snackBar: MatSnackBar,
               public router: Router,
               public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { }

  ngOnInit(): void {
  }

  onSubmit(
  ) {
    this.isLoading = true;
    this.authservice.SignIn(this.form.email, this.form.password).then((result) => {
      this.snackBar.open('Login sucessfully', 'ok', {
        duration: 2000,
      });
      console.log('Login successfully');
      this.isLoading = true;
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
    }).catch((error) => {
      this.isLoading = false;
      this.error = error.message;
      console.log(error);
    });

  }

}
