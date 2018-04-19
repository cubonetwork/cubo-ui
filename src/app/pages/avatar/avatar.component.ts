import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <mat-tab-group>
      <mat-tab label="Exemplo">Content 1</mat-tab>
      <mat-tab label="API">Content 2</mat-tab>
    </mat-tab-group>
  `,
  styleUrls: ['./avatar.component.scss']
})
export class PageAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
