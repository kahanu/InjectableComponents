import { InjectableComponentService } from './../dynamic/services/injectable-component.service';
import { DynamicComponent } from './../dynamic/dynamic-component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  btns: DynamicComponent[];
  selectedComponent: DynamicComponent;

  constructor(private injectableService: InjectableComponentService) { }

  ngOnInit() {
    this.btns = this.injectableService.getComponents();
  }

  select(id: string) {
    this.selectedComponent = this.injectableService.getComponent(id);
    console.log('selected componenty: ', this.selectedComponent);
  }

}
