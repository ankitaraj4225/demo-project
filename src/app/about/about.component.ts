import { Component} from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  form;

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: new FormControl('', this.textValidator),
      languages: new FormControl(''),
    })
  }

  textValidator(control) {
    if(control.value.length < 3) {
      return {'lastName': true};
    }
  }

  onSubmit = function(user) {
    console.log(user);
  }

}
