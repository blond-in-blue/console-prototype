import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHostContainerComponent } from './dynamic-content/content-host-container/content-host-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentHostContainerComponent
  ],
  exports: [
    ContentHostContainerComponent
  ]
})
export class SharedModule { }
