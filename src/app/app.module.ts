import { MaterialModule } from './material/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/auth/login/login.component';
import { SingupComponent } from './component/auth/singup/singup.component';
import { ForgetPasswordComponent } from './component/auth/forget-password/forget-password.component';
import { TootlbarComponent } from './component/shared/tootlbar/tootlbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SpineerComponent } from './component/shared/spineer/spineer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { VerifyEmailComponent } from './component/auth/verify-email/verify-email.component';
import { LogoComponent } from './component/shared/logo/logo.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBYFdiw3HbS6ugc8eowg4_7a8IFqEEhC2o',
  authDomain: 'keep-ae44a.firebaseapp.com',
  databaseURL: 'https://keep-ae44a.firebaseio.com',
  projectId: 'keep-ae44a',
  storageBucket: 'keep-ae44a.appspot.com',
  messagingSenderId: '817846746626',
  appId: '1:817846746626:web:0d9ac2eb2b44d4db9b711b',
  measurementId: 'G-G75X6RGPXC'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    ForgetPasswordComponent,
    TootlbarComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SpineerComponent,
    VerifyEmailComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
