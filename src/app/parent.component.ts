import {ElementRef, ChangeDetectorRef} from '@angular/core';
import {PageOverlaySpinnerComponent} from '../utils/page-overlay-spinner/page-overlay-spinner.component';
import { Content } from './main.constant';

export class parent{
    private static content:any;
    public pageOverlaySpinnerComponent:PageOverlaySpinnerComponent;

    constructor(public _elementRef:ElementRef, public _changeDetectorRef: ChangeDetectorRef)
    {
        this.pageOverlaySpinnerComponent = new PageOverlaySpinnerComponent(_elementRef, _changeDetectorRef);
        this.content = Content;
    }

    //CONTENT GETTER
    get content(): any{
        return parent.content;
    }

    //CONTENT SETTER
    set content(data:any){
        parent.content = data;
    }
}