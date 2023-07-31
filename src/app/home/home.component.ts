import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // constructor() { }

  // ngOnInit(): void {
  //   onsubmit = function(user) {
  //     console.log(user);
  //   }
  // }
  onsubmit = function(user) {
    console.log(user);
  }

}
