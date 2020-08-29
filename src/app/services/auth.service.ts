import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public  afAuth: AngularFireAuth, public  router: Router) {
  }

  async login(email: string, password: string) {
     await this.afAuth.signInWithEmailAndPassword(email, password);
     this.router.navigate(['admin/list']);
}

async sendEmailVerification(email: string) {
  await this.afAuth.sendPasswordResetEmail(email);
}
}
