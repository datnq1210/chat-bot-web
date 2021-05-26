import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  constructor(private storiesService: StoriesService) {}

  listStories = [];

  listColumns = [
    {caption: "id", dataField: "id"},
    {caption: "Tên Story", dataField: "name"},
  ];

  ngOnInit(): void {
    this.storiesService.getAllData('api/v1/Stories').subscribe((res) => {
      if (res && res.data) {
        this.listStories = res.data;
      }
    });
  }
}
