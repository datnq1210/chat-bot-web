import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import dxButton from 'devextreme/ui/button';
import { confirm, custom } from 'devextreme/ui/dialog';
import notify from 'devextreme/ui/notify';
import { FormMode } from '../../enum/form-mode.enum';

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
  title: string;

  @Input()
  loadingVisible: boolean;

  @Output()
  loadingVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  selectedItem: any = new EventEmitter<any>();

  @Output()
  onSaveName: any = new EventEmitter<any>();

  @Output()
  onDelete: any = new EventEmitter<any>();

  @Output()
  onDeleteMultiple: any = new EventEmitter<any>();
  //#endregion

  //#region properties
  isDeleteMultilpe: boolean = false;
  selectedRow: any;
  isVisiblePopup: boolean;
  popupTitlte: string;
  saveButtonOptions;
  fileUploadForm;
  fileInputLabel;
  newObject = {
    Id: null,
    NewName: null,
    State: 0
  };
  isEmptyTextBox = false;
  //#endregion

  //#region viewchild
  @ViewChild('dataGridRef', { static: false }) dataGrid;
  @ViewChild('popupSave', { static: false }) popupSave;
  //#endregion

  //#region Constructor
  constructor() {
    var me = this;
    this.saveButtonOptions = {
      icon: 'save',
      text: 'Lưu',
      onClick: function (e) {
        me.saveData();
      },
    };
  }
  //#endregion

  //#region life cycle
  ngOnInit(): void { }
  //#endregion

  //#region methods
  addData() {
    this.isVisiblePopup = true;
    this.popupTitlte = "Thêm";
    this.newObject.NewName = '';
    this.newObject.State = FormMode.Insert;
  }

  updateData(e) {
    this.isVisiblePopup = true;
    this.popupTitlte = "Sửa";
    this.newObject = e.row.data;
    this.newObject.State = FormMode.Update;
    this.newObject.NewName = this.newObject['name'];
  }

  deleteData(e) {
    var message = "Bạn có chắc chắn muốn xóa bản ghi này không?";
    this.confirmDialog(message)
      .show()
      .then((res) => {
        if (res) {
          // console.log(this.dataGrid.instance.getSelectedRowsData());
          const id = e.row.data.id;
          this.onDelete.emit(id);
        }
      });
  }

  deleteMutipleData() {
    var message = "Bạn có chắc chắn muốn xóa những bản ghi này không?";
    this.confirmDialog(message)
      .show()
      .then((res) => {
        if (res) {
          this.onDeleteMultiple.emit(this.dataGrid.instance.getSelectedRowsData());
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

  confirmDialog(message) {
    let myDialog = custom({
      title: 'Cảnh báo',
      messageHtml: `<b style="font-size: 16px; color: red">${message}</b>`,
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

  saveData() {
    if (this.newObject.NewName && this.newObject.NewName.trim() != '') {
      this.onSaveName.emit(this.newObject);
      this.isEmptyTextBox = false;
    }
    
    else {
      this.isEmptyTextBox = true;
    }
  }

  openPoup() {
    this.isVisiblePopup = true;
  }

  closePopup() {
    this.isVisiblePopup = false;
  }

  //#endregion
}
