import { Component, OnInit, ViewChild } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';
import { FormMode } from 'src/app/shared/enum/form-mode.enum';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  constructor(private storiesService: StoriesService) { }

  listStories = [];
  @ViewChild('dataGrid', { static: false }) dataGrid;

  listColumns = [
    { caption: "id", dataField: "id" },
    { caption: "Tên Story", dataField: "name" },
  ];

  ngOnInit(): void {
    this.getStories();
  }

  getStories(): void {
    this.storiesService.getAllData().subscribe((res) => {
      if (res && res.data) {
        this.listStories = res.data;
      }
    });
  }

  onSaveName(e): void {
    if (e.State == FormMode.Insert) {
      this.storiesService.insertData({ name: e.NewName }).subscribe(res => {
        if (res && res.success) {
          this.dataGrid.closePopup();
          this.getStories();
        }
      });
    }
    else if (e.State == FormMode.Update) {
      this.storiesService.updateData({
        id: e.id,
        name: e.NewName,
        intent_uuid: e.intent_uuid
      }).subscribe(res => {
        if (res && res.success) {
          this.dataGrid.closePopup();
          this.getStories();
        }
      });
    }
  }

  onDelete(id): void {
    this.storiesService.deleteData(id).subscribe(res => {
      if (res && res.success) {
        this.getStories();
      }
    })
  }

  onDeleteMultiple(listIttemDelete): void {
    console.log(listIttemDelete);
    this.storiesService.deleteMultipleData(listIttemDelete).subscribe(res => {
      if (res && res.success) {
        this.getStories();
      }
    })
  }
}
