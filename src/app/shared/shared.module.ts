import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHostContainerComponent } from './dynamic-content/content-host-container/content-host-container.component';
import { ContentHostDirective } from './dynamic-content/content-host/content-host.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentHostContainerComponent,
    ContentHostDirective
  ],
  exports: [
    ContentHostContainerComponent,
    ContentHostDirective
  ]
})
export class SharedModule { }
