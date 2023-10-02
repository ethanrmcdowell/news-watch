import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { newsData }  from '../assets/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-watch';
  newsData: any;
  topStories: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getData();
    this.topStories = newsData;
    console.log("top stories ->", this.topStories);
  }

  async getData() {
    try {
      this.newsData = await this.dataService.getNews();
      // this.topStories = this.newsData.data.data;

      this.topStories = this.newsData.data.results;
      console.log("TOP STORIES", this.topStories);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
