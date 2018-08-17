import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { ContentHostDirective } from '../content-host/content-host.directive';
import { ContentItem } from '../content-item';

@Component({
  selector: 'app-content-host-container',
  templateUrl: './content-host-container.component.html',
  styleUrls: ['./content-host-container.component.scss']
})
export class ContentHostContainerComponent implements OnInit {

  @Input() content: ContentItem;
  @Input() test: string;
  @ViewChild(ContentHostDirective) appContentHost: ContentHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const contentItem = this.content;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(contentItem.component);

    const viewContainerRef = this.appContentHost.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);
  }


}
