import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UttersService } from 'src/app/services/utters.service';
import { FormMode } from 'src/app/shared/enum/form-mode.enum';

@Component({
  selector: 'app-utters',
  templateUrl: './utters.component.html',
  styleUrls: ['./utters.component.scss'],
})
export class UttersComponent implements OnInit {
  constructor(private uttersService: UttersService) {}

  listUtters = [];
  @ViewChild('dataGrid', { static: false }) dataGrid;

  listColumns = [
    {caption: "id", dataField: "id"},
    {caption: "Tên Utter", dataField: "name"},
  ];

  ngOnInit(): void {
    this.getUtters();
  }

  getUtters(): void {
    this.uttersService.getAllData().subscribe((res) => {
      if (res && res.data) {
        this.listUtters = res.data;
      }
    });
  }

  onSaveName(e): void {
    if (e.State == FormMode.Insert) {
      this.uttersService.insertData({ name: e.NewName }).subscribe(res => {
        if (res && res.success) {
          this.dataGrid.closePopup();
          this.getUtters();
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
          this.dataGrid.closePopup();
          this.getUtters();
        }
      });
    }
  }

  onDelete(id): void {
    this.uttersService.deleteData(id).subscribe(res => {
      if (res && res.success) {
        this.getUtters();
      }
    })
  }

  onDeleteMultiple(listIttemDelete): void {
    console.log(listIttemDelete);
    this.uttersService.deleteMultipleData(listIttemDelete).subscribe(res => {
      if (res && res.success) {
        this.getUtters();
      }
    })
  }
}
