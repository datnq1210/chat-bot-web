import { Component, OnInit, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { IntentsService } from 'src/app/services/intents.service';
import { FormMode } from 'src/app/shared/enum/form-mode.enum';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.scss'],
})
export class IntentsComponent implements OnInit {
  constructor(private intentsService: IntentsService) { }
  listIntents = [];

  listColumns = [
    { caption: 'id', dataField: 'id' },
    { caption: 'Tên intent', dataField: 'name' },
  ];

  loadingVisible: boolean;

  @ViewChild('dataGrid', { static: false }) dataGrid;


  ngOnInit(): void {
    this.getIntents();
  }

  getIntents(): void {
    this.loadingVisible = true;
    this.intentsService.getAllData().subscribe((res) => {
      if (res && res.data) {
        this.listIntents = res.data;
        this.loadingVisible = false;
      }
    });
  }

  onSaveName(e): void {
    if (e.State == FormMode.Insert) {
      this.intentsService.insertData({ name: e.NewName }).subscribe(res => {
        if (res && res.success) {
          notify(res.userMessage, 'success');
          this.dataGrid.closePopup();
          this.getIntents();
        }
        else {
          notify(res.userMessage, 'error');
        }
      });
    }
    else if (e.State == FormMode.Update) {
      this.intentsService.updateData({
        id: e.id,
        name: e.NewName,
        intent_uuid: e.intent_uuid
      }).subscribe(res => {
        if (res && res.success) {
          notify(res.userMessage, 'success');
          this.dataGrid.closePopup();
          this.getIntents();
        }
        else {
          notify(res.userMessage, 'error');
        }
      });
    }
  }

  onDelete(id): void {
    this.intentsService.deleteData(id).subscribe(res => {
      if (res && res.success) {
        notify(res.userMessage, 'success');
        this.getIntents();
      }
      else {
        notify(res.userMessage, 'error');
      }
    })
  }

  onDeleteMultiple(listIttemDelete): void {
    console.log(listIttemDelete);
    this.intentsService.deleteMultipleData(listIttemDelete).subscribe(res => {
      if (res && res.success) {
        notify(res.userMessage, 'success');
        this.getIntents();
      }
      else {
        notify(res.userMessage, 'error');
      }
    })
  }
}
