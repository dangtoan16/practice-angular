import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChildBindingComponent } from '../child-binding/child-binding.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-binding',
  standalone: true,
  imports: [CommonModule, ChildBindingComponent],
  templateUrl: './parent-binding.component.html',
  styleUrls: ['./parent-binding.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class ParentBindingComponent {
  parentMessage: string = 'Hello from Parent Component!';
}
