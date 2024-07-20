import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-binding',
  standalone: true,
  imports: [],
  templateUrl: './child-binding.component.html',
  styleUrl: './child-binding.component.css'
})
export class ChildBindingComponent {
  @Input() childMessage: string | undefined;
}
