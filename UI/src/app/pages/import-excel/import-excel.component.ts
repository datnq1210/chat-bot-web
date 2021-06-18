import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImportService } from 'src/app/services/import.service';
import * as _ from 'lodash'
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.scss']
})
export class ImportExcelComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private importService: ImportService
  ) { }
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  loadingVisible: boolean;
  ngOnInit(): void {
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }

  onFileSelect(event) {
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);

      if (!_.includes(af, file.type)) {
        notify('Vui lòng chọn file có đinh dạng .xlsx hoặc .xls!', 'warning');
      } else {
        this.fileInputLabel = file.name;
        this.fileUploadForm.get('myfile').setValue(file);
      }
    }
  }


  onFormSubmit() {
    if (!this.fileUploadForm.get('myfile').value) {
      notify('Vui lòng chọn file!', 'warning');
      return false;
    }

    const formData = new FormData();
    formData.append('formFile', this.fileUploadForm.get('myfile').value);
    formData.append('agentId', '007');
    this.loadingVisible = true;
    this.importService.insertData(formData).subscribe(res => {
      if (res && res.success) {
        this.loadingVisible = false;
        notify(res.userMessage, 'success');
      }
      else {
        notify(res.userMessage, 'error');
      }
    })
  }
}
