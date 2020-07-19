import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContentService } from '../services/content.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchInput: string;
  categories: any;
  showSearch = false;
  handSet = false;
  tl = new TimelineMax({ paused: true, reversed: true });

  constructor(
    private contentService: ContentService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        if (result.matches) {
          this.activateHandsetLayout();
        }
      });
  }

  ngAfterViewInit() {}

  activateHandsetLayout() {
    this.handSet = true;
    this.showSearch = false;
  }

  search(event) {
    if (this.searchInput) {
      this.categories = this.contentService.searchCategories(this.searchInput);
    }
  }

  show(event) {
    if (!this.showSearch) {
      this.tl
        .to('.mobile-search', 0, {
          css: { display: 'none' },
        })
        .to('.search', 1, {
          css: { width: this.handSet ? '24vw' : '20vw', display: 'block' },
          ease: 'easeOut',
        });

      this.showSearch = true;
      this.tl.play();
    }
  }

  close(event) {
    if (
      typeof event.target.className === 'string' &&
      event.target.className.includes('mobile-search')
    )
      return;

    if (this.showSearch) {
      this.tl
        .to('.search', 1, {
          css: { width: 0 },
          ease: 'easeOut',
        })
        .to('.mobile-search', 0, {
          css: { display: 'block' },
          delay: -0.7,
        })
        .to('.search', 0, {
          css: { display: 'none' },
          delay: -0.7,
        });

      this.showSearch = false;
      this.tl.play();
    }
  }
}
