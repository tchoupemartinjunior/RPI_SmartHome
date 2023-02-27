import { Component, Input, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {faPlusCircle, faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  constructor() {}
  @Input() infoIcon:IconProp
  @Input() title: string;
  @Input() mainData: any;
  @Input() label: any;
  @Input() extra:any


}
