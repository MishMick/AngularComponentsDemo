import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';
import {
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  exports: [MainComponent],
  providers: [],
  bootstrap: []
})
export class MainModule { }
