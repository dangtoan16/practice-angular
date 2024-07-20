import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dom-sanitizer',
  standalone: true,
  imports: [],
  templateUrl: './dom-sanitizer.component.html',
  styleUrl: './dom-sanitizer.component.css'
})
export class DomSanitizerComponent implements OnInit{
  someHTML = 'Some HTML <script>alert("hello");</script>';
  myURL = 'javascript:alert("Hello");';
  myTrustedURL;

  constructor(private sanitizer: DomSanitizer) {
    this.myTrustedURL = sanitizer.bypassSecurityTrustUrl(this.myURL);
  }

  ngOnInit() {
  }
}
