import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

enum FormFields {
  Title = 'title',
  Description = 'description',
}

@Component({
  selector: 'app-starter-feature',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './starter-feature.component.html',
  styleUrl: './starter-feature.component.scss',
})
export class StarterFeatureComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm();
  }

  // form controls displayed in the HTML template
  get titleControlValue(): string {
    return this.todoForm.controls[FormFields.Title].value;
  }

  get descriptionControlValue(): string {
    return this.todoForm.controls[FormFields.Description].value;
  }

  // form structure
  private setupForm(): void {
    this.todoForm = this.fb.group({
      [FormFields.Title]: [''], // default values
      [FormFields.Description]: [''],
    });
  }

  onSubmit(): void {
    console.log('Form submitted!');
    const formValues = this.todoForm.value;
    console.log({ formValues });
  }
}
