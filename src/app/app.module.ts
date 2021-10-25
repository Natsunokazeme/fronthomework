import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './components/main/main.component';
import { TopComponent } from './components/main/top/top.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { DeleteconfirmComponent } from './components/deleteconfirm/deleteconfirm.component';
import { ActionsComponent } from './components/main/actions/actions.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DisableconfirmComponent } from './components/disableconfirm/disableconfirm.component';









@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    MainComponent,
    TopComponent,
    CategoryEditComponent,
    AttachmentComponent,
    DeleteconfirmComponent,
    ActionsComponent,
    DisableconfirmComponent,
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
