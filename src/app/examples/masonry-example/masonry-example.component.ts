import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { PersonTableComponent } from './cards/person-table/person-table.component';

@Component({
  selector: 'app-masonry-example',
  templateUrl: './masonry-example.component.html',
  styleUrls: ['./masonry-example.component.scss']
})
export class MasonryExampleComponent implements OnInit {

  @ViewChild(NgxMasonryComponent) masonryGrid: NgxMasonryComponent;

  masonryItems = [
    { title: PersonTableComponent, width: Widths.large, height: Heights.large },
    { title: '', width: Widths.medium, height: Heights.small },
    { title: '', width: Widths.medium, height: Heights.medium },
    { title: '', width: Widths.medium, height: Heights.medium },
    { title: '', width: Widths.medium, height: Heights.large },
    { title: '', width: Widths.small, height: Heights.large },
    { title: '', width: Widths.small, height: Heights.medium },
    { title: '', width: Widths.small, height: Heights.small },
    { title: '', width: Widths.medium, height: Heights.medium },
    { title: '', width: Widths.medium, height: Heights.medium },
    { title: '', width: Widths.small, height: Heights.small },
    { title: '', width: Widths.small, height: Heights.small },
  ];

  masonryOptions: NgxMasonryOptions = {
    itemSelector: '.masonry-item',
    columnWidth: 1,
    percentPosition: false,
    transitionDuration: '0.3s',
  };

  constructor() { }

  ngOnInit() {
  }

  updateLayout() {
    this.masonryGrid.ngOnInit();
  }
}

enum Widths {
  small = '200px',
  medium = '400px',
  large = '800px'
}

enum Heights {
  small = '150px',
  medium = '300px',
  large = '600px'
}
