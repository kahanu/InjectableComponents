import { ComponentHostDirective } from './../component-host.directive';
import { DynamicComponent } from './../dynamic-component';
import { Component, OnInit, Input, ViewChild, ComponentRef, ComponentFactoryResolver, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit, OnDestroy, OnChanges {
  @Input() dynComponents: DynamicComponent[];
  @Input() selectedIndex = 0;
  @ViewChild(ComponentHostDirective) appComponentHost: ComponentHostDirective;
  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Respond to changes in Input data values, like the selected Index.
   */
  ngOnChanges() {
    this.loadComponent();
  }

  /**
   * Load the incoming component on component initialization.
   */
  ngOnInit() {
    // this.loadComponent();
  }

  /**
   * Destroy the component reference when leaving the page.
   */
  ngOnDestroy() {
    this.componentRef.destroy();
  }

  /**
   * Load the selected component.
   */
  loadComponent() {
    if (!this.selectedIndex) { this.selectedIndex = 0; }
    const selectedComponent = this.dynComponents[this.selectedIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(selectedComponent.component);
    const viewContainerRef = this.appComponentHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicComponent>this.componentRef.instance).data = selectedComponent.data;

  }

}
