import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <mat-tab-group>
      <mat-tab label="Exemplo"></mat-tab>
      <mat-tab label="API">Content 2</mat-tab>
    </mat-tab-group>
  `,
})
export class PageAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
