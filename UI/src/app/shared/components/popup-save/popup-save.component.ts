import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-popup-save',
  templateUrl: './popup-save.component.html',
  styleUrls: ['./popup-save.component.scss'],
})
export class PopupSaveComponent implements OnInit {
  //#region
  @Input()
  titlePopup: string;
  @Input()
  dataForm: any;
  @Input()
  isVisible: boolean = false;
  //#endregion

  //#region property
  saveButtonOptions: any;
  closeButtonOptions: any;
  nameModel: any;
  //#endregion

  //#region  constructor
  constructor() {
    this.saveButtonOptions = {
      icon: 'save',
      text: 'Save',
      onClick: function (e) {
        const message = `Thêm thành công`;
        notify(
          {
            message: message,
            position: {
              my: 'center top',
              at: 'center top',
            },
          },
          'success',
          3000
        );
      },
    };
  }
  //#endregion

  //#region life cycle
  ngOnInit(): void {}
  //#endregion

  //#region methods
  saveData() {
    const message = `Email is sent to`;
    notify(
      {
        message: message,
        position: {
          my: 'center top',
          at: 'center top',
        },
      },
      'success',
      3000
    );
  }

  openPoup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }
  //#endregion
}
