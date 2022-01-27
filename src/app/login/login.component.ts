import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private appService: AppService,
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
    /*   this.appService.loginUser(this.loginForm.value).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/home']);
    }); */
    if (this.appService.loginUser(this.loginForm.value)) {
      this.route.navigate(['/home']);
      this.appService.setLogged(true);
    } else {
      this._snackBar.open('Credenciales incorrectas', '', { duration: 2500 });
    }
  }
}
