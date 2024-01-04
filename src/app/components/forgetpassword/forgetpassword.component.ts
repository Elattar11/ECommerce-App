import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetpassService } from 'src/app/core/services/forgetpass.service';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

  constructor(private _ForgetpassService:ForgetpassService , private _Router:Router , private _ToastrService:ToastrService){}
  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  email:string = "";
  userMsg:string = "";

  forgetForm:FormGroup = new FormGroup({
    email:new FormControl('' , [Validators.required , Validators.email , ])

  });

  resetCodeForm:FormGroup = new FormGroup({
    resetCode:new FormControl('' , [Validators.required])

  });

  resetPasswordForm:FormGroup = new FormGroup({

    newPassword:new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])

  });

  forgetPassword():void
  {
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email;
    this._ForgetpassService.forgetPassword(userEmail).subscribe({
      next:(res) =>
      {
        this.userMsg = res.message;
        this.step1 = false;
        this.step2 = true;
      },
      error:(err) =>
      {
        this.userMsg = err.error.message;
      }
    });
  }

  resetCode():void
  {
    let resetCode = this.resetCodeForm.value;
    this._ForgetpassService.resetCode(resetCode).subscribe({
      next:(res) =>
      {
        this.userMsg = res.status;
        this.step2 = false;
        this.step3 = true;
      },
      error:(err) =>
      {
        this.userMsg = err.error.message;
      }
    })
  }

  newPassword():void
  {
    let resetForm = this.resetPasswordForm.value;
    resetForm.email = this.email;
    this._ForgetpassService.resetPassword(resetForm).subscribe({
      next:(res) =>
      {
        if(res.token)
        {
          localStorage.setItem('userToken' , res.token);
          this._Router.navigate(['/login']);
          this._ToastrService.success('Your password reseted successfully');
        }
      },
      error:(err)=>
      {
        this.userMsg = err.error.message;
      }
    })
  }
}
