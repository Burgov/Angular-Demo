import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterInputComponent } from './register-input/register-input.component';


@NgModule({
  declarations: [RegisterComponent, RegisterInputComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,ReactiveFormsModule
  ]
})
export class RegisterModule { }
