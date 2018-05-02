import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-loading-spinner',
  templateUrl: './component-loading-spinner.component.html',
  styleUrls: ['./component-loading-spinner.component.css']
})
export class ComponentLoadingSpinnerComponent {

  @Input('loadingContent')
  public loadingContent: any;
  @Input('loadingHeading')
  public loadingHeading: any;

}
