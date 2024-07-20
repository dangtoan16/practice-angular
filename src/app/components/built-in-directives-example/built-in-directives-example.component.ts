import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-directives-example',
  standalone: true,
  imports: [],
  templateUrl: './built-in-directives-example.component.html',
  styleUrl: './built-in-directives-example.component.css'
})
export class BuiltInDirectivesExampleComponent {
  canShow: boolean = false;
  toggleShow() {
    this.canShow = !this.canShow;
  }
}
