import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { NgxMasonryModule } from 'ngx-masonry';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { GridsterExampleComponent } from './gridster-example/gridster-example.component';
import { MasonryExampleComponent } from './masonry-example/masonry-example.component';
import { PersonTableComponent } from './masonry-example/cards/person-table/person-table.component';
import { SharedModule } from '../shared/shared.module';
import { ContentHostContainerComponent } from '../shared/dynamic-content/content-host-container/content-host-container.component';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    NgxMasonryModule,
    SharedModule,
  ],
  declarations: [
    GridsterExampleComponent,
    BootstrapExampleComponent,
    MasonryExampleComponent,
    PersonTableComponent
  ],
  exports: [
    GridsterExampleComponent
  ],
  entryComponents: [
    PersonTableComponent,
  ]
})
export class ExamplesModule { }
