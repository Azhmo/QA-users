import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatRadioModule, MatSelectModule, MatToolbar, MatToolbarModule} from '@angular/material';
import {UserService} from './service/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule
  ],
  declarations: [],
  providers: [
    UserService
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
