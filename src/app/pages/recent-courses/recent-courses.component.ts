import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'recent-courses',
  templateUrl: './recent-courses.component.html',
  styleUrls: ['./recent-courses.component.scss']
})
export class RecentCoursesComponent implements OnInit {

  @Input()
  vh: number;

  public recentCourses : Course[];
  public course1 : Course;
  public course2 : Course;
  public course3 : Course;
  public course4 : Course;

  constructor(private contentService : ContentService) { }  

  ngOnInit(): void {
    this.contentService.getRecentCourses().subscribe(data =>{
       this.recentCourses = data

       this.course1 = this.recentCourses[0]
       this.course2 = this.recentCourses[1]
       this.course3 = this.recentCourses[2]
       this.course4 = this.recentCourses[3]
       this.recentCourses.map(data => {
        let d = data 
        d.name = data.name.trim()
        d.description = data.description.trim()
        return d;
       } )
    });


  }

  clickMe(){
    alert('Hi Work in progress')
  }

  
}
