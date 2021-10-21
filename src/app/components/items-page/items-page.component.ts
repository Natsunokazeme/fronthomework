import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  items = [
    {
      selected: false,
      code:'whatever',
      name:'whatevername',
      sort:100,
      disabled:false,
      editable:true,
      linkable:true,
      deletable:true
    },
    {
      selected: false,
      code:'test1',
      name:'test1name',
      sort:100,
      disabled:false,
      editable:true,
      linkable:true,
      deletable:true
    },
    {
      selected: false,
      code:'test1',
      name:'test1name',
      sort:100,
      disabled:false,
      editable:true,
      linkable:true,
      deletable:true
    },
    {
      selected: false,
      code:'test1',
      name:'test1name',
      sort:100,
      disabled:false,
      editable:true,
      linkable:true,
      deletable:true
    },
    {
      selected: false,
      code:'test1',
      name:'test1name',
      sort:100,
      disabled:false,
      editable:true,
      linkable:true,
      deletable:true
    },
    {
      selected: false,
      code:'test1',
      name:'test1name',
      sort:100,
      disabled:false,
      editable:true,
      linkable:true,
      deletable:true
    },
    {
      selected: false,
      code:'test1',
      name:'test1name',
      sort:100,
      disabled:false,
      editable:true,
      linkable:true,
      deletable:true
    },
  ]
   length = this.items.length;
  constructor() { }

  ngOnInit(): void {
  }

}
