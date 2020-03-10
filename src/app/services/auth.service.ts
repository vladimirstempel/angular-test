import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import { User } from 'firebase';
import GithubAuthProvider = firebase.auth.GithubAuthProvider;


@Injectable()
export class AuthService {
  ghData: any;

  constructor(private fireAuth: AngularFireAuth, private toastr: ToastrService) {
    if (localStorage.getItem('ghData')) {
      this.ghData = JSON.parse(localStorage.getItem('ghData'));
    }
  }

  isLoggedIn(): Observable<boolean> {
    return this.fireAuth.authState
      .pipe(
        map(user => !!user)
      );
  }

  getUser(): Observable<User> {
    return this.fireAuth.authState;
  }

  login(credentials: {email: string, password: string}): Promise<void | UserCredential> {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        this.toastr.success('You have successfully logged in.', 'Success');
        return res;
      })
      .catch(err => {
        if (err) {
          this.toastr.error(err.message, 'Error');
        }
      });
  }

  register(credentials: {email: string, password: string}): Promise<void | UserCredential> {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        this.toastr.success('User has been registered successfully.', 'Success');
        return res;
      })
      .catch(err => {
        if (err) {
          this.toastr.error(err.message, 'Error');
        }
      });
  }

  loginGithub() {
    const provider = new GithubAuthProvider();
    this.fireAuth.signInWithPopup(provider)
      .then((res) => {
        this.toastr.success('You have successfully logged in.', 'Success');
        localStorage.setItem('ghData', JSON.stringify(res.additionalUserInfo));
        this.ghData = res.additionalUserInfo;
      });
  }

  logout() {
    return this.fireAuth.signOut()
      .then(res => {
        localStorage.removeItem('ghData');
        return res;
      })
      .catch(err => {
        if (err) {
          this.toastr.error(err.message, 'Error');
        }
      });
  }
}
