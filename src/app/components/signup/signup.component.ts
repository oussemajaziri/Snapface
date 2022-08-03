import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName:['',[Validators.minLength(3),Validators.required]],
      userEmail:['',[Validators.email,Validators.required]],
      userPwd:['',[Validators.minLength(7),Validators.required]]
    })
  }

  singup(x:any){
    console.log('The user is : ',x );
  }

}
