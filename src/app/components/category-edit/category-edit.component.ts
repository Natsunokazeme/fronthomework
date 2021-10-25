import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ItemData {
  selected: boolean=false;
  code: string='';
  name: string='';
  sort: number=0;
  disabled:boolean=false;
  editable: boolean=true;
  linkable: boolean=true;
  deletable: boolean=true;
}

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  value = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: ItemData
  ) { }

  ngOnInit(): void {
  }

}
