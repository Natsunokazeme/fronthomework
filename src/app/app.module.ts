import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MainComponent } from './components/main/main.component';
import { TopComponent } from './components/main/top/top.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { ShowAttachmentsComponent } from './components/show-attachments/show-attachments.component';




@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    MainComponent,
    TopComponent,
    CategoryEditComponent,
    AttachmentComponent,
    ShowAttachmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
