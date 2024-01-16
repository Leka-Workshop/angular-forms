# Starter Reactive Form

- [Setting up the form](#setting-up-the-form)
- [Adding a form to the template](#adding-form-to-the-template)
- Default values
- Submitting the form
- [Displaying the form values on the UI](#displaying-the-form-values-on-the-ui)

![image](https://github.com/Leka-Workshop/angular-forms/assets/23176181/ac65e8fd-c14c-4bf2-a304-f4d46597b0db)

## Setting up the form

#### starter-features.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

enum FormFields {
  Title = "title",
  Description = "description",
}

@Component({
  selector: "app-starter-feature",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./starter-feature.component.html",
  styleUrl: "./starter-feature.component.scss",
})
export class StarterFeatureComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setupForm();
  }

  // form structure
  private setupForm(): void {
    this.todoForm = this.fb.group({
      [FormFields.Title]: [""], // default values
      [FormFields.Description]: [""],
    });
  }

  onSubmit(): void {
    console.log("Form submitted!");
    const formValues = this.todoForm.value;
    console.log({ formValues });
  }
}
```

## Adding form to the template

#### starter-features.component.html

```html
<form [formGroup]="todoForm" (ngSubmit)="onSubmit()" class="todo-form">
  <h1>Starter Form</h1>

  <div class="form-field-wrapper">
    <label>Title</label>
    <input formControlName="title" type="text" class="form-field" />
  </div>

  <div class="form-field-wrapper">
    <label>Description</label>
    <textarea formControlName="description" class="form-field"></textarea>
  </div>

  <!--  This button invokes onSubmit() method upon clicking  -->
  <button class="submit-btn" type="submit">Submit</button>
</form>
```

The `formControlName` in the HTML must match with name of the control in the form setup:

```ts
this.todoForm = this.fb.group({
  [FormFields.Title]: [""], // default values
  [FormFields.Description]: [""],
});
```

## Displaying the form values on the UI

#### starter-features.component.ts

Extracting value of each form control using Getter functions:

```ts
  // form controls displayed in the HTML template
  get titleControlValue(): string {
    return this.todoForm.controls[FormFields.Title].value;
  }

  get descriptionControlValue(): string {
    return this.todoForm.controls[FormFields.Description].value;
  }
```

#### starter-features.component.html

Reading value from each control in the HTML:

```html
<div><b>Title:</b> {{titleControlValue}}</div>
<div><b>Description:</b> {{descriptionControlValue}}</div>
```

Reading all form values using the name of the form (todoForm) and the `value` property. You also need to use the `json` pipe to parse object into string.

```html
  <div class="form-values">
    <div><b>Title:</b> {{titleControlValue}}</div>
    <div><b>Description:</b> {{descriptionControlValue}}</div>

    <div><b>Full form:</b> {{ todoForm.value | json }}</div>
  </div>
```
