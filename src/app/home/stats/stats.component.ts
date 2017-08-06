import { ComponentHostDirective } from './../../dynamic/component-host.directive';
import { DynamicComponent } from './../../dynamic/dynamic-component';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ComponentRef,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnDestroy {
  @Input() dynComp: DynamicComponent;
  @ViewChild(ComponentHostDirective) appComponentHost: ComponentHostDirective;
  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  loadComponent() {
    console.log('inside stats component: ', this.dynComp);
    const comp = this.dynComp;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp.component);
    console.log('host: ', this.appComponentHost);  // <-- this is undefined

    const viewContainerRef = this.appComponentHost.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicComponent>this.componentRef.instance).data = comp.data;
  }

}
