import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs'; 

@Component({
  selector: 'app-built-in-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {
  today: Date;
  longText: string;
  listAuthor: Observable<{ name: string }[]>;

  constructor() {
    
    this.today = new Date(); 
    this.longText = 'This is a long text that will be sliced.'; 
    this.listAuthor = of([
      { name: 'Author 1' },
      { name: 'Author 2' },
      { name: 'Author 3' },
    ]); 
}
}
