import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UttersService } from 'src/app/services/utters.service';

@Component({
  selector: 'app-utters',
  templateUrl: './utters.component.html',
  styleUrls: ['./utters.component.scss'],
})
export class UttersComponent implements OnInit {
  constructor(private uttersService: UttersService) {}

  listUtters = [];

  listColumns = [
    {caption: "id", dataField: "id"},
    {caption: "Tên Utter", dataField: "name"},
  ];
  
  ngOnInit(): void {
    this.uttersService.getAllData('api/v1/Utters').subscribe((res) => {
      if (res && res.data) {
        this.listUtters = res.data;
      }
    });
  }
}
