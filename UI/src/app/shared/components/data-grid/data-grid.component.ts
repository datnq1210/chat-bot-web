import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { confirm, custom } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit {
  //#region input
  @Input()
  dataSource = [];

  @Input()
  listColumns = [];

  @Input()
  titlte: string;

  @Input()
  popupTitlte: string;

  //#endregion

  //#region properties
  isDeleteMultilpe: boolean = false;
  selectedRow: any;
  isVisiblePopupSave: boolean = false;
  //#endregion

  //#region viewchild
  @ViewChild('dataGridRef', { static: false }) dataGrid;
  @ViewChild('popupSave', { static: false }) popupSave;
  //#endregion

  //#region Constructor
  constructor() {}
  //#endregion

  //#region life cycle
  ngOnInit(): void {}
  //#endregion

  //#region methods
  addData() {
    this.popupSave.openPoup();
  }

  updateData(e) {
    console.log(e.row.data);
  }

  deleteData() {
    this.confirmDialog()
      .show()
      .then((res) => {
        if (res) {
          console.log(this.dataGrid.instance.getSelectedRowsData());
        }
      });
  }

  onSelectionChanged(e) {
    const allSelectedRowKeys = e.selectedRowKeys;
    if (allSelectedRowKeys.length > 0) {
      this.isDeleteMultilpe = true;
    } else {
      this.isDeleteMultilpe = false;
    }
  }

  confirmDialog() {
    let myDialog = custom({
      title: 'Cảnh báo',
      messageHtml:
        '<b style="font-size: 16px; color: red">Bạn có chắc chắn muốn xoá bản ghi này không?</b>',
      buttons: [
        {
          text: 'Huỷ',
          onClick: () => {
            return { confirm: false };
          },
        },
        {
          text: 'Xoá',
          onClick: () => {
            return { confirm: true };
          },
        },
      ],
    });
    return myDialog;
  }
  //#endregion
}
