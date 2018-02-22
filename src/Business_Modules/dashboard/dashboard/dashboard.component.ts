import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public title: string;
  constructor(private titleService: Title ) {
    this.title = 'Hello kitty';
    /**
     * setting the title of the route page
     * @param obj
     */
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {}

}
