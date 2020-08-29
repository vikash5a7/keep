import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  public error = null;
  message = null;
  public isloading = false;
  public form = {
  email: null,
  password: null,
  confirmPassword: null,
  };
  constructor( private authservice: AuthService,
               private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isloading = true;
    this.authservice.SignUp(this.form.email, this.form.password).then((result) => {
      this.snackBar.open('Sucessful registered', 'ok', {
        duration: 2000,
      });
      console.log('singing sucessfull');
      console.log('user infoe', result);
      this.isloading = true;
      this.authservice.SetUserData(result.user);
    }).catch((error) => {
      this.isloading = false;
      this.error = error.message;
      console.log(error);
    });
  }
}

