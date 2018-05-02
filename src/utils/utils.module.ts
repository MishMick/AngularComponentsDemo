import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from "ngx-bootstrap";
import { ComponentLoadingSpinnerComponent } from '../utils/component-loading-spinner/component-loading-spinner.component';
import { LoadingSpinnerComponent } from '../utils/loading-spinner/loading-spinner.component';
import {
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
} from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule
    ],
    declarations: [
        ComponentLoadingSpinnerComponent,
        LoadingSpinnerComponent
    ],
    exports:[
        ComponentLoadingSpinnerComponent,
        LoadingSpinnerComponent
    ]
})
export class UtilsModule{

}