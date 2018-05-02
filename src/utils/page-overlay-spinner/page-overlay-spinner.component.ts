declare var require:any;
import { Component, OnInit, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-page-overlay-spinner',
  templateUrl: './page-overlay-spinner.component.html',
  styleUrls: ['./page-overlay-spinner.component.css']
})
export class PageOverlaySpinnerComponent implements OnInit {

  constructor(public _elementRef:ElementRef, public _changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.hideBodyAfterModalOpen('page-overlay-spinner');
    this._changeDetectorRef.detectChanges();
    this.stop();
  }
  
  hideBodyAfterModalOpen(modalId:any){
    let cancelPopElement = document.getElementById(modalId);
    if(cancelPopElement && cancelPopElement.parentElement)
    {
      if(document.body)
      {
        cancelPopElement.parentElement.removeChild(cancelPopElement);
      }
      document.body.appendChild(cancelPopElement);
    }
  }
  
 public start():void{
   let spinner = document.getElementById("main-overlay-spinner"),
      mainContent = document.getElementById("mainContentWrapper"),
      body= document.body,
      header = document.getElementById("header"),
      footer = document.getElementById("footer");

      header && header[0] && header[0].setAttribute("aria-hidden","true");
      footer && footer[0] && footer[0].setAttribute("aria-hidden","true");
      mainContent && mainContent.setAttribute("aria-hidden","true");
      mainContent && mainContent.classList.add("blur-container");
      if(spinner != null){
        spinner.style.display = "block";
      }
      if(body != null)
      {
        body.style.overflow = "hidden";
      }
 }
  public stop(): void {
    let spinner = document.getElementById("main-overlay-spinner"),
      mainContent = document.getElementById("mainContentWrapper"),
      body = document.body,
      header = document.getElementById("header"),
      footer = document.getElementById("footer");

    header && header[0] && header[0].setAttribute("aria-hidden", "false");
    footer && footer[0] && footer[0].setAttribute("aria-hidden", "false");
    mainContent && mainContent.setAttribute("aria-hidden", "false");
    if(mainContent && mainContent.classList.contains("blur-container")){
      mainContent.classList.remove("blur-container");
    }
    if (spinner != null) {
      spinner.style.display = "none";
    }
    if (body != null) {
      body.style.overflow = "";
    }
  }

  public setOverlayContent(copy:string):void{
    let spinnerContent = document.getElementById("main-overlay-text");
    if(spinnerContent != null)
    {
      spinnerContent.innerHTML = copy;
    }
  }
}
