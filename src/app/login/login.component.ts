import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit() {
    /*   this.loginService.loginUser(this.loginForm.value).subscribe((res) => ... */
    if (this.loginService.loginUser(this.loginForm.value)) {
      this.route.navigate(['/home']);
    } else {
      this._snackBar.open('Credenciales incorrectas', '', { duration: 2500 });
    }
  }
}
