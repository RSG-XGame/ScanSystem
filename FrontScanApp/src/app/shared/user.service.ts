import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  @BlockUI() blockUI: NgBlockUI;
  readonly BaseURI = 'http://localhost:5000/api';

  // formModel = this.fb.group({
  //   UserName: ['', Validators.required],
  //   Email: ['', Validators.email],
  //   FullName: [''],
  //   Passwords: this.fb.group({
  //     Password: ['', [Validators.required, Validators.minLength(6)]],
  //     ConfirmPassword: ['', Validators.required]
  //   }, { validator: this.comparePasswords })

  // });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl != null) {
      if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
        const pswd = fb.get('Password');
        if (pswd != null && pswd.value !== confirmPswrdCtrl.value) {
            confirmPswrdCtrl.setErrors({ passwordMismatch: true });
          } else {
          confirmPswrdCtrl.setErrors(null);
        }
      }
    }
  }

  // register() {
  //   const body = {
  //     UserName: this.formModel.value.UserName,
  //     Email: this.formModel.value.Email,
  //     FullName: this.formModel.value.FullName,
  //     Password: this.formModel.value.Passwords.Password
  //   };
  //   return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  // }

  login(formData: any) {
    this.blockUI.start("Loading...");
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData)
    .pipe(
      // this.blockUI.start("Loading..."),
      timeout(5000),
      finalize(() => {
        this.blockUI.stop();
      }))
    .subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
        this.toastr.success("Успешно", 'Аутентификация');
      },
      err => {
        if (err.status === 400) {
          this.toastr.error(err.error.message, 'Аутентификация');
        } else if (err.status === 0) {
          this.toastr.error('Сервер недоступен!', 'Аутентификация');
        } else if (err.name === "TimeoutError" ) {
          this.toastr.error('Превышен лимит ожидания!', 'Аутентификация');
        } else {
          console.log(err);
      }});
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
}
