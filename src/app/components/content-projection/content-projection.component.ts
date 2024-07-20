import { Component } from '@angular/core';
import { ShowContentMultiComponent } from '../show-content-multi/show-content-multi.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [ShowContentMultiComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent {

}
