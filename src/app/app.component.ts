import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addoptions;
  showOptions = 0;
  constructor(private fb: FormBuilder) {

  }
  quizForm: FormGroup = this.fb.group({
    questions: ['Shyamala', Validators.required],
    options: this.fb.array([

    ]),
    correctOption: [1, Validators.required]
  });

  handleSubmit() {
    console.log(this.quizForm.get('questions').value);
    console.log(this.quizForm.get('options').value);
    // console.log(document.getElementById('keyans').innerText);
  }

  removeOption(a) {
    console.log(a);
    this.addoptions = this.quizForm.get('options') as FormArray;
    console.log(this.addoptions);
    this.addoptions.removeAt(a);
    // delete this.addoptions.value[a];
    // this.addoptions.value.splice(a, 1);
    console.log(this.addoptions.value);

  }

  AddOptions() {
    this.showOptions = this.showOptions + 1;
    this.addoptions = this.quizForm.get('options') as FormArray;
    this.addoptions.push(this.fb.group({
      name: ['', Validators.required],
      isBoolean: [, Validators.required]
    }));

  }

  ngOnInit() {
    // setTimeout()
    // this.quizForm.get('questions').valueChanges.subscribe(a => console.log(a));
  }

}
