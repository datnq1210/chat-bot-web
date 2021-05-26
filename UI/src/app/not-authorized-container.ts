import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleCardModule } from 'src/app/layouts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-authorized-container',
  template: `
    <app-single-card [title]="title" [description]="description">
      <router-outlet></router-outlet>
    </app-single-card>
  `,
  styles: [`
    :host {
      width: 100%;
      height: 100%;
    }
  `]
})
export class NotAuthorizedContainerComponent {

  constructor(private router: Router) { }

  get title() {
    const path = this.router.url.split('/')[1];
    switch (path) {
      case 'login-form': return 'Đăng nhập';
      case 'reset-password': return 'Khôi phục mất khẩu';
      case 'create-account': return 'Đăng ký';
      case 'change-password': return 'Đổi mật khẩu';
    }
  }

  get description() {
    const path = this.router.url.split('/')[1];
    switch (path) {
      case 'reset-password': return 'Vui lòng nhập địa chỉ email mà bạn đã sử dụng để đăng ký và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn qua Email.';
    }
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SingleCardModule,
  ],
  declarations: [NotAuthorizedContainerComponent],
  exports: [NotAuthorizedContainerComponent]
})
export class NotAuthorizedContainerModule { }
