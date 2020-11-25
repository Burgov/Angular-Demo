import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-input',
  templateUrl: './register-input.component.html',
  styleUrls: ['./register-input.component.css']
})
export class RegisterInputComponent implements OnInit {

  @Input()
  control!: FormControl ;
  @Input()
  label: string = "";
  @Input()
  input: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    if(this.control!=undefined){
      return this.control.touched && this.control.errors; 
    } else {
      return false
    }
   }

}
