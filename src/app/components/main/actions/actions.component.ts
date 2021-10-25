import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent, ItemData } from '../../category-edit/category-edit.component';
import { DisableconfirmComponent } from '../../disableconfirm/disableconfirm.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  selectAll=false;
  @Input() items: any[] = [];

  constructor(public dialog: MatDialog) { }
  //创建
  createNew() {
    const newItem = new ItemData;
    const createDialogRef = this.dialog.open(CategoryEditComponent, {
      data: newItem
    });
    createDialogRef.beforeClosed().subscribe(result => {
      if (result) {

        // here to write the create function
        newItem.disabled=true;
        this.items.push(newItem)
        console.log(newItem);
      }
    })
  }

  manydisable(){
    const disableDialogRef = this.dialog.open(DisableconfirmComponent);
    disableDialogRef.afterClosed().subscribe(result =>{
      if(result){
        for(let i=0;i<this.items.length;i++){
          if(this.items[i].selected)
          this.items[i].disabled=true;
          this.items[i].selected=false;
        }
      }
    })
  }

  manyactive(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].selected)
      this.items[i].disabled=false;
      this.items[i].selected=false;
    }
  }
  ngOnInit(): void {
  }

}
