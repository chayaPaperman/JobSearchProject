import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userScv: UserService, private _router: Router) {
  }
  userName: string ='';
  userPassword: string="";
  passwordValidation: string = "";

  contact() {
    this.passwordValidation = this.userScv.passwordValidator(this.userPassword!);
    if (this.passwordValidation === "") {
      this.userScv.getUserFromServer(this.userName!, this.userPassword!).subscribe((res: any) => {
        if (res) {
          localStorage.setItem('userDetails', JSON.stringify(res));
          this._router.navigate(['jobs']);
        }
        else
          alert("we don't know you enter again!")
      })
    }
  }
}
