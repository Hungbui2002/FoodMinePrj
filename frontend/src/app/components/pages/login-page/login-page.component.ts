import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { IUserLogin } from 'src/app/shared/interfaces/IUserLogin';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  returnUrl: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    const body: IUserLogin = {
      email: this.fc.email.value,
      password: this.fc.password.value,
    };
    this.usersService.login(body).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
