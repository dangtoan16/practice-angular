import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child-view-children',
  standalone: true,
  imports: [],
  templateUrl: './view-child-view-children.component.html',
  styleUrl: './view-child-view-children.component.css'
})
export class ViewChildViewChildrenComponent {
  @ViewChild('uploadfile') uploadfile!: ElementRef;
  @ViewChildren('lineTpl') lineTpl!: QueryList<ElementRef>;

  selectFile() {
    this.uploadfile.nativeElement.click();
  }

  makeAllRed() {
    this.lineTpl.forEach(e => e.nativeElement.style.color = 'red');
  }

  makeFirstBlue() {
    this.lineTpl.first.nativeElement.style.color = 'blue';
  }
}
