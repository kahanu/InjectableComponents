import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from 'app/dynamic/dynamic-component';
import { InjectableWizardService } from 'app/dynamic/services/injectable-wizard.service';
import { PubSubService } from 'app/core/services/pub-sub/pub-sub.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  components: DynamicComponent[];
  component: DynamicComponent;
  selectedIndex: number;
  btnText = 'Next';
  showButton = true;

  constructor(private injectableWizardService: InjectableWizardService,
    private pubSub: PubSubService) { }

  ngOnInit() {
    this.selectedIndex = 1;
    this.getComponents();
    this.pubSub.getWizard()
      .subscribe(data => {
        this.selectedIndex = data.step;
      });
  }

  getComponents() {
    this.components = this.injectableWizardService.getComponents();
  }

  next() {
    this.selectedIndex += 1;
    this.btnText = 'Next';

    if (this.selectedIndex === 4) {
      this.btnText = 'Back';
    }
    if (this.selectedIndex > 4) {
      this.selectedIndex = 1;
    }
  }
}
