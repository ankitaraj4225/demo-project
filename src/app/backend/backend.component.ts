import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  public courses: any;
  title = "List of BE courses";

  constructor(public service:CourseService) {

   }

  ngOnInit() {
    this.service.getBECourses().subscribe(data => {
      console.log(data);
      this.courses = data;
    })
  //  this.courses = this.service.getBECourses();
  //  console.log('courses', this.courses);
  }

}
