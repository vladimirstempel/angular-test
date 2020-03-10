import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  faGithub = faGithub;
  authForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    if (this.authForm.invalid) return;

    this.authService.login(this.authForm.value)
      .then(() => {
        this.router.navigate(['/blocks']);
      });
  }

  register() {
    if (this.authForm.invalid) return;

    this.authService.register(this.authForm.value)
      .then(() => {
        this.router.navigate(['/blocks']);
      });
  }

  loginGithub() {
    this.authService.loginGithub();
  }

  onNavChange() {
    this.authForm.reset();
  }
}
