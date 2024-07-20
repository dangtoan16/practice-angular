import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppInputOutputCompComponent } from '../app-input-output-comp/app-input-output-comp.component';

@Component({
  selector: 'app-interaction-comp',
  standalone: true,
  imports: [BrowserModule, FormsModule, AppInputOutputCompComponent],
  templateUrl: './interaction-comp.component.html',
  styleUrls: ['./interaction-comp.component.css']
})
export class InteractionCompComponent {
  inputData: string = '';
  listData: string[] = [];

  saveData(data: string) {
    if (data) {
      this.listData.push(data);
      this.inputData = '';
    }
  }
}
