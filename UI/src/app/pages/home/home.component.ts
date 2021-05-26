import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
  listIntents: any[];
}
