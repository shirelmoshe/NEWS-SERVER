import { Component, OnInit } from '@angular/core';
import { IArticle } from '../models/article-body';
import './home-page.component';

@Component({
  selector: 'nwp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  public images: IArticle[] = [];
  ngOnInit(): void {
    this.images.push(
      {
        NewsItemID: 1,
        NewsItemTitle: 'חתול',
        NewsItemDescription: 'חד חתול',
        NewsItemUrl:
          'https://www.google.com/search?q=%D7%92%D7%95%D7%92%D7%9C+%D7%AA%D7%A8%D7%92%D7%95%D7%9D&oq=&aqs=chrome.1.35i39i362l8.622955718j0j15&sourceid=chrome&ie=UTF-8',
        NewsItemImage:
          'https://hahacanvas.co.il/wp-content/uploads/2021/11/%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%99%D7%A4%D7%95%D7%AA-%D7%9C%D7%94%D7%93%D7%A4%D7%A1%D7%94-12.jpg',
        NewsItemEntriesCount: 0,
        RSSWebName: 'וואלה',
      },
      {
        NewsItemID: 2,
        NewsItemTitle: 'גוגל',
        NewsItemDescription: 'גוגל מודל',
        NewsItemUrl:
          'https://www.google.com/search?q=%D7%92%D7%95%D7%92%D7%9C+%D7%AA%D7%A8%D7%92%D7%95%D7%9D&oq=&aqs=chrome.1.35i39i362l8.622955718j0j15&sourceid=chrome&ie=UTF-8',
        NewsItemImage:
          'https://michal-aharon.co.il/wp-content/uploads/2021/12/%D7%90%D7%A8%D7%99%D7%94-%D7%90%D7%93%D7%9D-2.jpg',
        NewsItemEntriesCount: 0,
        RSSWebName: 'וואלה',
      }
    );
  }
}
