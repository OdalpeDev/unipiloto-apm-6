import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';

@Component({
  selector: 'vehicle-detail',
  templateUrl: './detvehicles.component.html'
})
export class DetvehiclesComponent {
 @Input()
 vehicle: Vehicle;
}
