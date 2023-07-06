import { Component } from '@angular/core';

@Component({
  selector: 'test-root-shl-ng',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host-angular';

  activeItem = 0;

  setActiveItem(index: number): void {
    this.activeItem = index;
  }
}
