import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  
  toggle: string = "login";
  userEmail: string = '';
  userPass: string = '';
  userPass2: string = '';

  loginToggle() {
    this.toggle = this.toggle === 'login' ? 'register' : 'login';
    console.log("toggle set to: " + this.toggle);
  }

  registerUser() {
    
  }

  loginUser() {

  }
}
