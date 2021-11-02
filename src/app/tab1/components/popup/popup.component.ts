import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
})
export class PopupComponent implements OnInit {
  @Input() name: string;
  @Input() city: string;
  @Input() id: string;
  @Input() score: number;

  constructor() {}

  ngOnInit() {}
}
