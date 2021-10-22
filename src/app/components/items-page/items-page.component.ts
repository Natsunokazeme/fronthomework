import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  items = [
    {
      selected: false,
      code: 'whatever',
      name: 'whatevername',
      sort: 100,
      disabled: false,
      editable: true,
      linkable: true,
      deletable: true
    },
    {
      selected: false,
      code: 'test1',
      name: 'test1name',
      sort: 100,
      disabled: false,
      editable: true,
      linkable: true,
      deletable: true
    },
    {
      selected: false,
      code: 'test1',
      name: 'test1name',
      sort: 100,
      disabled: false,
      editable: true,
      linkable: true,
      deletable: true
    },
    {
      selected: false,
      code: 'testdwadawdwa1',
      name: 'test1name',
      sort: 100,
      disabled: false,
      editable: true,
      linkable: true,
      deletable: true
    },
    {
      selected: false,
      code: 'test1',
      name: 'test1nadwadwadme',
      sort: 100,
      disabled: false,
      editable: true,
      linkable: true,
      deletable: true
    },
    {
      selected: false,
      code: 'test1',
      name: 'test1name',
      sort: 100,
      disabled: false,
      editable: true,
      linkable: true,
      deletable: true
    },
    {
      selected: false,
      code: 'test1',
      name: 'test1name',
      sort: 100,
      disabled: false,
      editable: true,
      linkable: true,
      deletable: true
    },
  ]
  length = this.items.length;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 25, 50];
  startIndex = 0;

  // MatPaginator Output
  paginatorEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.startIndex = this.pageSize * event.pageIndex;
  }

  itemSelect(item: any) {
    item.selected=!item.selected;
    console.log(item);

  }

  itemDisable(item: any) {
    item.disabled=!item.disabled;
    console.log(item.disabled);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
