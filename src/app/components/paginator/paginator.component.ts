// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { PageEvent } from '@angular/material/paginator';

// @Component({
//   selector: 'app-paginator',
//   templateUrl: './paginator.component.html',
//   styleUrls: ['./paginator.component.css']
// })
// export class PaginatorComponent implements OnInit {
//   pageSize = 5;
//   // MatPaginator Output
//   pageEvent!: PageEvent;
//   @Input() length!: number;

//   //直接发送起始index给父组件
//   @Output() Change = new EventEmitter<number>();
//   startIndex = this.pageEvent.pageSize * this.pageEvent.pageIndex;
//   changeIndex(startIndex: number) {
//     console.log(this.pageEvent.pageIndex);

//     this.Change.emit(startIndex);
//   }

//   pageSizeOptions = [5, 10, 20, 25, 50];
//   constructor() { }

//   ngOnInit(): void {
//   }

// }

