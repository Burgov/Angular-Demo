import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showProgressBar = false
  registerForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,
    Validators.minLength(5)
    ]),
  }) 

  constructor(private router: Router) { }

  registerSubmit(email: string,username: string,password: string){

  }

  ngOnInit(): void {
  }

}
