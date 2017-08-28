import { Component, Input } from '@angular/core';
import { Driver } from '../../../models/driver';

@Component({
  selector: 'driver-detail',
  templateUrl: './detdriver.component.html'
})
export class DetdriverComponent {
 @Input()
 driver: Driver;
}
