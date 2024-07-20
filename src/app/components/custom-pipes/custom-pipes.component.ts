import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css'
})
export class CustomPipesComponent {
  value = 1234567;
}
