import { Component, OnInit, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
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
  loadingVisible: boolean;
  ngOnInit(): void {
    this.getStories();
  }

  getStories(): void {
    this.loadingVisible = true;
    this.storiesService.getAllData().subscribe((res) => {
      if (res && res.data) {
        this.loadingVisible = false;
        this.listStories = res.data;
      }
      else {
        notify(res.userMessage, 'error');
      }
    }, error => {
      console.error(error);
      this.loadingVisible = false;
      notify("Kết nối đến server thất bại", 'error');
    });
  }

  onSaveName(e): void {
    if (e.State == FormMode.Insert) {
      this.storiesService.insertData({ name: e.NewName }).subscribe(res => {
        if (res && res.success) {
          notify(res.userMessage, 'success');
          this.dataGrid.closePopup();
          this.getStories();
        }
        else {
          notify(res.userMessage, 'error');
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
          notify(res.userMessage, 'success');
          this.dataGrid.closePopup();
          this.getStories();
        }
        else {
          notify(res.userMessage, 'error');
        }
      });
    }
  }

  onDelete(id): void {
    this.storiesService.deleteData(id).subscribe(res => {
      if (res && res.success) {
        notify(res.userMessage, 'success');
        this.getStories();
      }
      else {
        notify(res.userMessage, 'error');
      }
    })
  }

  onDeleteMultiple(listIttemDelete): void {
    console.log(listIttemDelete);
    this.storiesService.deleteMultipleData(listIttemDelete).subscribe(res => {
      if (res && res.success) {
        notify(res.userMessage, 'success');
        this.getStories();
      }
      else {
        notify(res.userMessage, 'error');
      }
    })
  }
}
