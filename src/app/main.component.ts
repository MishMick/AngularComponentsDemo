import { Component, 
  ChangeDetectorRef, 
  ElementRef, Inject, 
  ViewChild, HostListener, 
  ViewChildren, QueryList, 
  Renderer } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DOCUMENT } from "@angular/platform-browser";
import { parent } from './parent.component';
@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends parent{
  @ViewChildren('errPanel',{read:ElementRef}) elemRefs:QueryList<ElementRef>;
  public base_url:any;
  constructor(public _elementRef:ElementRef,
              public _formBuilder:FormBuilder,
              @Inject(DOCUMENT) private document:any,
              public _changeDetectorRef:ChangeDetectorRef,
              public renderer:Renderer)
  {
    super(_elementRef, _changeDetectorRef);
    this.base_url = window.location.host;
  }

  ngOnInit()
  {
    document.body.scrollTop = 0;
    let self = this;
    setTimeout(function(){
      self.pageOverlaySpinnerComponent.start();
      self.pageOverlaySpinnerComponent.setOverlayContent(self.content.pageOverlaySpinnerText);
    },0)
  }
}
