import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  public isLoading = false;
  public error = null;
  public form = {
    email: null,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
