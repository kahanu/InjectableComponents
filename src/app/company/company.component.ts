import { InjectableCompanyService } from './../dynamic/services/injectable-company.service';
import { CompanyService } from './company.service';
import { Company } from 'app/shared/models/models';
import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from 'app/dynamic/dynamic-component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyList: Company[];
  company: Company;
  showCompany: boolean;
  components: DynamicComponent[];
  component: DynamicComponent;
  selectedIndex: number;

  constructor(
    private companyService: CompanyService,
    private injectableCompanyService: InjectableCompanyService
  ) { }

  ngOnInit() {
    this.getCompanies();

  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe(res => this.companyList = res);
  }

  getComponents(id: number) {
    this.injectableCompanyService.companyId = id;
    this.components = this.injectableCompanyService.getComponents();
  }

  selectCompany(id: number) {
    this.selectedIndex = undefined;
    this.company = this.companyList.find(item => {
      return item.id === id;
    });

    if (this.company) {
      this.getComponents(this.company.id);
      this.showCompany = true;
    }
  }

  /**
   * This selects which component to load and display.
   * @param idx the index of the selected button component
   */
  select(idx: number) {
    // Add 1 to the index since the dynamic-content.component doesn't like a 0 index;
    this.selectedIndex = (idx + 1);

  }

}
