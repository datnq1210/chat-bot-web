import { Component, OnInit } from '@angular/core';
import { IntentsService } from 'src/app/services/intents.service';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.scss'],
})
export class IntentsComponent implements OnInit {
  constructor(private intentsService: IntentsService) {}
  listIntents = [];

  listColumns = [
    { caption: 'id', dataField: 'id' },
    { caption: 'Tên intent', dataField: 'name' },
  ];

  ngOnInit(): void {
    this.getIntents();
  }

  getIntents(): void {
    this.intentsService.getAllData('api/v1/Intents').subscribe((res) => {
      if (res && res.data) {
        this.listIntents = res.data;
      }
    });
  }
}
