import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {
  myName = 'Angular';
  getNum(): number {return 1}
}
