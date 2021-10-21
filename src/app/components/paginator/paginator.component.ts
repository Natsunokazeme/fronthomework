import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
length = 100;
pageSize = 20;
pageSizeOptions=[5,10,20,25,50];
  constructor() { }

  ngOnInit(): void {
  }

}
