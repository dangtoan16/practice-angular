import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  formBuild: FormGroup;

  constructor(private fb: FormBuilder) { 
   
    this.formBuild = this.fb.group({
      yourName: ['Kang Hidro']
    });
  }

  ngOnInit(): void {
    
  }

  setValue() {
    this.formBuild.get('yourName')?.setValue('Angular');
  }

  resetForm() {
    this.formBuild.reset();
  }

  updateValueAndValidity() {
    this.formBuild.get('yourName')?.updateValueAndValidity();
  }

}
