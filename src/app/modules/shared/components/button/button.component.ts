import { Component, HostBinding, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  @HostBinding()
  variant: 'default' | 'icon' = 'default';

  constructor() { }
}

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [],
  exports: [
    ButtonComponent
  ]
})
export class ButtonComponentModule { }
