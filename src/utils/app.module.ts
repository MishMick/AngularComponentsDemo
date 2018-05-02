import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from '../app/main.component';
import { PageOverlaySpinnerComponent } from '../utils/page-overlay-spinner/page-overlay-spinner.component';
import { MainModule } from '../app/main.module';
import { PageOverlaySpinnerModule} from '../utils/page-overlay-spinner/page-overlay-spinner.module';

@NgModule({
    imports: [
        BrowserModule,
        MainModule,
        PageOverlaySpinnerModule
    ],
    declarations:[

    ],
    providers:[

    ],
    exports:[

    ],
    bootstrap:[
        MainComponent,
        PageOverlaySpinnerComponent,
    ],
})
export class AppModule{
    
}