import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Course } from '../../models/course.model';
import { SubTopic } from '../../models/sub-topic.model';

@Component({
  selector: 'recent-courses',
  templateUrl: './recent-courses.component.html',
  styleUrls: ['./recent-courses.component.scss']
})
export class RecentCoursesComponent implements OnInit {

  @Input()
  vh: number;

  public subTopics : SubTopic[];
  public course1 : SubTopic ;
  public course2 : SubTopic;
  public course3 : SubTopic;
  
  public restOfTheCourses : SubTopic[];
  public restOfTheCoursesMobile : SubTopic[];  

  constructor(private contentService : ContentService) { }  

  ngOnInit(): void {

    this.contentService.getFeaturedSubTopic().subscribe((data: any) => {
      if (data[0].subTopics) {
        this.subTopics = data[0].subTopics;
        this.course1 = this.subTopics[0];
        this.course2 = this.subTopics[1];
        this.course3 = this.subTopics[2];
        this.restOfTheCourses = new Array<SubTopic>(6)
        this.restOfTheCourses.fill(this.course1,0,6);

        this.restOfTheCoursesMobile = new Array<SubTopic>(9)
        this.restOfTheCoursesMobile.fill(this.course1,0,9)
      }
    });
  }





  clickMe(){
    alert('Hi Work in progress')
  }

  
}


/*



    this.contentService.getFeaturedSubTopic().subscribe(subTopics => {
      this.recentCourses = subTopics;
      console.log(this.recentCourses)

      this.course1 = this.recentCourses[0].subTopics[0] as SubTopic

      alert(this.course1)
      console.log(this.course1)

      this.course2 = this.recentCourses[0].subTopics[1]
      this.course3 = this.recentCourses.subTopics[2]
      this.course4 = this.recentCourses.subTopics[3]
      


    });


data =>{
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
    }
    */