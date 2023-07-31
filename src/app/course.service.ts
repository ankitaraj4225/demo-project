import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses () {
    return ["Angular", "React", "Vue", "Javascript"];
  }
  getBECourses () {
    return of ([ {
      id: "1",
      value: "Java"
    },
    {
      id: "2",
      value: "PHP"
    },
    {
      id: "3",
      value: ".Net"
    },
    {
      id: "4",
      value: "Python"
    },
    ]);
  }
}
