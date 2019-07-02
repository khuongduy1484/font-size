import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  fontsize = 14;

  chageFontSize(value) {
this.fontsize = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
