import { Component, OnInit, Input} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog} from '@angular/material/dialog';
import { DeleteconfirmComponent } from '../deleteconfirm/deleteconfirm.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';




@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {
  selectAll = false;
  @Input() items: any[] = [];
  @Input() length: number = 0;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 25, 50];
  startIndex = 0;


  // MatPaginator Output
  paginatorEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.startIndex = this.pageSize * event.pageIndex;
  }

  itemSelect(item: any) {
    item.selected = !item.selected;
    console.log(item);

  }
  checked: boolean = false;
  selectall() {
    this.selectAll = !this.selectAll;
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].selected = this.selectAll;
    }
  }
  itemDisable(item: any) {
    item.disabled = !item.disabled;
    console.log(item.disabled);

  }

  constructor(public dialog: MatDialog) { }
  editSettings(item: any) {
    const preitem = Object.assign({}, item);
    //将当前item当作data传入对话框
    const editDialogRef = this.dialog.open(CategoryEditComponent, {
      data:item 
    });
    editDialogRef.beforeClosed().subscribe(result => {
      if (result){

        // here to write the edit function
        console.log(item);
      }else{
        //将item的值变为原来的值
       item.code=preitem.code;
       item.name=preitem.name;

      }
    });
  }
  deleteConfirm(item: any) {
    const deleteDialogRef = this.dialog.open(DeleteconfirmComponent);
    deleteDialogRef.afterClosed().subscribe(result => {
      if (result)
        // here to write the delete function
        console.log(item);
    });

  }

ngOnInit(): void {
}

}
