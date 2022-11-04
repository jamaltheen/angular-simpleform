import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  form: FormGroup;
  dataSource = [];
  isEdit = false;
  editIndex = -1;
  constructor(private fb: FormBuilder){

  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required]
    })
  }
  ngOnInit() {
    this.createForm();
  }
  addToTable() {
    if(this.form.valid) {
      this.dataSource.push(this.form.value)
      this.form.reset();
      alert('Added Successfully')
    } else {
      alert('Please fill all the fields');
    }
  }
  edit(item, i) {
    this.isEdit = true;
    this.editIndex = i;
    this.form.setValue({
      name: item.name,
      email: item.email,
      mobileNumber: item.mobileNumber,
      address: item.address
    });
  }
  UpdateRow() {
    this.dataSource[this.editIndex] = this.form.value;
    this.form.reset();
    alert('Updated Successfully');
    this.isEdit= false;
  }
  delete(item, i) {
    this.dataSource.splice(i, 1);
  }
}
