import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/data-access/application/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  submitted = false;

  errMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.authService.user$.subscribe((user) => {
      return Object.keys(user).length ? this.router.navigate(['']) : null;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) return;
    const { login, password } = this.loginForm.value;
    this.authService.login({ login, password }).subscribe({
      next: () => {},
      error: (err: Error) => {
        this.submitted = false;
        this.loginForm.reset();
        this.loginForm.setErrors({});
        this.errMsg = err.message;
      },
    });
  }
}
