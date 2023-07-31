import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @ViewChild('f', { static: true}) form:NgForm
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    gender: '',
    check1:'',
    check2:'',
    subscription:'',
    selected: ''
  };
  checkValues(e: any) {
    console.log(e.target.value);
    this.user.selected = e.target.value;
  }
  onSubmit(data: any) {
    console.log(data);
    // if (data.takeaway === true) {
    //   data.takeaway = "takeaway"
    // } else {
    //   data.delivery = "delivery"
    // }
   
    this.user.username = data.username,
    this.user.email = data.email,
    this.user.gender =data.gender,
    this.user.check1 = data.takeaway,
    this.user.check2 = data.delivery,
    this.user.subscription = data.subscription
  alert(
    this.user.username+"\n"+
    this.user.email+"\n"+
    this.user.gender+"\n"+
    this.user.check1+"\n"+
    this.user.check2+"\n"+
    this.user.subscription+"\n"+
    this.user.selected
  );
  // console.log(
  //   this.user.username,
  //   this.user.email,
  //   this.user.gender,
  //   this.user.check1,
  //   this.user.check2,
  //   this.user.subscription
  // );
  }

  ngOnInit(): void {
  }

}
