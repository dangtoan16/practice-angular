import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-output-comp', 
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './app-input-output-comp.component.html',
  styleUrls: ['./app-input-output-comp.component.css']
})
export class AppInputOutputCompComponent {
  @Input() data: string = '';
  @Output() returnData: EventEmitter<string> = new EventEmitter<string>();

  processData() {
    this.returnData.emit(this.data.toUpperCase());
    this.data = '';
  }
}
