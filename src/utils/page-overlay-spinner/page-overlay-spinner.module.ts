import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UtilsModule} from '../utils.module';

import { PageOverlaySpinnerComponent } from './page-overlay-spinner.component';

@NgModule({
    imports:[
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        UtilsModule
    ],
    declarations: [
        PageOverlaySpinnerComponent
    ],
    providers:[],
    exports:[
        PageOverlaySpinnerComponent
    ]
})
export class PageOverlaySpinnerModule{

}