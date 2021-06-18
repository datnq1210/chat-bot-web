import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { UttersService } from 'src/app/services/utters.service';
import { FormMode } from 'src/app/shared/enum/form-mode.enum';

@Component({
  selector: 'app-utters',
  templateUrl: './utters.component.html',
  styleUrls: ['./utters.component.scss'],
})
export class UttersComponent implements OnInit {
  constructor(private uttersService: UttersService) { }

  listUtters = [];
  @ViewChild('dataGrid', { static: false }) dataGrid;
  loadingVisible: boolean;

  listColumns = [
    { caption: "id", dataField: "id" },
    { caption: "Tên Utter", dataField: "name" },
  ];

  ngOnInit(): void {
    this.getUtters();
  }

  getUtters(): void {
    this.loadingVisible = true;
    this.uttersService.getAllData().subscribe((res) => {
      if (res && res.data) {
        this.listUtters = res.data;
        this.loadingVisible = false;
      }
      else {
        notify(res.userMessage, 'error');
      }
    });
  }

  onSaveName(e): void {
    if (e.State == FormMode.Insert) {
      this.uttersService.insertData({ name: e.NewName }).subscribe(res => {
        if (res && res.success) {
          notify(res.userMessage, 'success');
          this.dataGrid.closePopup();
          this.getUtters();
        }
        else {
          notify(res.userMessage, 'error');
        }
      });
    }
    else if (e.State == FormMode.Update) {
      this.uttersService.updateData({
        id: e.id,
        name: e.NewName,
        intent_uuid: e.intent_uuid
      }).subscribe(res => {
        if (res && res.success) {
          notify(res.userMessage, 'success');
          this.dataGrid.closePopup();
          this.getUtters();
        }
        else {
          notify(res.userMessage, 'error');
        }
      });
    }
  }

  onDelete(id): void {
    this.uttersService.deleteData(id).subscribe(res => {
      if (res && res.success) {
        notify(res.userMessage, 'success');
        this.getUtters();
      }
      else {
        notify(res.userMessage, 'error');
      }
    })
  }

  onDeleteMultiple(listIttemDelete): void {
    console.log(listIttemDelete);
    this.uttersService.deleteMultipleData(listIttemDelete).subscribe(res => {
      if (res && res.success) {
        notify(res.userMessage, 'success');
        this.getUtters();
      }
      else {
        notify(res.userMessage, 'error');
      }
    })
  }
}
