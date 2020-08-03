import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recent-courses',
  templateUrl: './recent-courses.component.html',
  styleUrls: ['./recent-courses.component.scss']
})
export class RecentCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input()
  vh: number;
}
