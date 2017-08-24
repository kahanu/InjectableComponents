import { HomeService } from './home.service';
import { InjectableComponentService } from './../dynamic/services/injectable-component.service';
import { DynamicComponent } from './../dynamic/dynamic-component';
import { Component, OnInit } from '@angular/core';
import { Company } from 'app/shared/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companyList: Company[];
  company: Company;
  showCompany: boolean;

  components: DynamicComponent[];
  selectedIndex: number;

  constructor(
    private injectableService: InjectableComponentService,
    private homeService: HomeService) { }

  /**
   * Load all the components into the DynamicContent component.
   */
  ngOnInit() {
    // this.components = this.injectableService.getComponents();
    // this.getCompanies();
  }

  // /**
  //  * The selected component to load into the view.
  //  * @param idx The index of the selected component to load.
  //  */
  // select(idx: number) {
  //   this.selectedIndex = idx;
  // }

  // getCompanies() {
  //   this.homeService.getCompanies()
  //     .subscribe(res => this.companyList = res);
  // }

  // selectedCompany(id: number) {
  //   console.log('company id: ', id);
  //   this.company = this.companyList.find(item => {
  //     return item.id === id;
  //   });

  //   if (this.company) {
  //     this.showCompany = true;
  //   }
  // }

}
