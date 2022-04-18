import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerform = new FormGroup({
    firstname : new FormControl(""),
    lastname : new FormControl(""),
    email : new FormControl(""),
    mobile : new FormControl(""),
    gender : new FormControl(""),
    pwd : new FormControl(""),
    rpwd : new FormControl("")
  });

  registerSubmited(){
    console.log(this.registerform);
  }

}
