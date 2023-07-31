import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];
  newItem = "";
  name = "Ankita";
  pushItem = function () {
    if(this.newItem != "") {
      this.items.push(this.newItem);
      this.newItem = ""
    }
  }
  removeItem = function (index) {
    this.items.splice(index);
  }
  day = new Date(1992, 3, 15);
  arr = [18, 56, 99, 45, 72, 1, 6, 12, 19, 33, 46];
  form;

  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(''),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexa: new FormControl('')
    })
  }
  decimalChanged = function(newValue) {
    if (newValue != '') {
      this.form.patchValue({binary: parseInt(newValue, 10).toString(2) });
      this.form.patchValue({octal: parseInt(newValue, 10).toString(8) });
      this.form.patchValue({hexa: parseInt(newValue, 10).toString(16) });
    }
    else {
      this.form.patchValue({binary: ""});
      this.form.patchValue({octal: ""});
      this.form.patchValue({hexa: ""});
    }
  }
b = 0;
o = 0;
h = 0;

  binaryChanged = function(newValue) {
    this.b = this.b + 1 ;
    if (this.b == 1) {
      if (newValue != '') {
        this.form.patchValue({decimal: parseInt(newValue, 2).toString(10) });
      }
      else {
        this.form.patchValue({decimal: ""});
        
      }
      this.b = 0;
    }
  }

  octalChanged = function(newValue) {
    this.o = this.o + 1 ;
    if (this.o == 1) {
      if (newValue != '') {
        this.form.patchValue({decimal: parseInt(newValue, 8).toString(10) });
      }
      else {
        this.form.patchValue({decimal: ""});
        
      }
      this.o = 0;
    }
  }

  hexaChanged = function(newValue) {
    this.h = this.h + 1 ;
    if (this.h == 1) {
      if (newValue != '') {
        this.form.patchValue({decimal: parseInt(newValue, 16).toString(10) });
      }
      else {
        this.form.patchValue({decimal: ""});
        
      }
      this.h = 0;
    }
  }
}
